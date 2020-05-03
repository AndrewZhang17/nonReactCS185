import React, {useState, useEffect} from 'react';
import config from '../config';
const firebase = require('firebase')

function Guestbook(props) {
    const [data, setData] = useState([]);
    const [shouldRender, setShowRender] = useState(true);
    
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [msg, setMsg] = useState("");
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        //get a reference to the database
        let ref = firebase.database().ref('messages');

        //retrieve its data
        ref.on('child_added', (childSnapshot, prevChildKey) => {
            //this is your call back function
            //state will be a JSON object after this
            //set your apps state to contain this data however you like
            const newChild = childSnapshot.val();
            //i have previously declared a state variable like this: const [data, setData] = useState([]) so that I can make the below call
            setData(curData => [...curData, newChild]);
        })
    }, [shouldRender])

    const handleSubmit = (evt) => {
        evt.preventDefault();

       var errors = [];

        if(name.length == 0) {
            errors.push("Name required.");
        }
        else if(name.length <= 5 || name.length >= 20) {
            errors.push("Name must be longer than 5 and shorter than 20 characters.");
        }
        if(desc.length >= 100) {
            errors.push("Description must be shorter than 100 characters.");
        }
        if(msg.length == 0) {
            errors.push("Message required.");
        }
        else if(msg.length <= 15 || msg.length >= 500){
            errors.push("Message must be longer than 15 and shorter than 500 characters.");
        }

        if(errors.length > 0) {
            console.log(errors.length)  
            alert("ERROR:\n".concat(errors.join("\n")))    
            return;
        }
        
        var time = new Date().toLocaleString();
        firebase.database().ref('messages').push().set({
            "name": name,
            "desc": desc,
            "msg": msg,
            "visible": visible,
            "email": email,
            "time": time
        });
        setName("");
        setDesc("");
        setMsg("");
        setVisible(false);
        setEmail("");
        alert("Your message was submitted! Thanks for visiting.")   
    }

    return (    
        <div className="guestbook-page">
            <h1>
                Guestbook
            </h1> 
            <div className="guestbook">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label>
                            What is your name?
                            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                        </label>
                        <label>
                            Write a short description about yourself (optional).
                            <input type="text" value={desc} onChange={e => setDesc(e.target.value)}/>
                        </label>
                        <label>
                            What would you like to say?
                            <input type="text" value={msg} onChange={e => setMsg(e.target.value)}/>
                        </label>
                        <label>
                            Would you like to show your message to other guests?
                            <select value={visible} onChange={e => setVisible(e.target.value)}>
                                <option value={false}>No</option>
                                <option value={true}>Yes</option>
                            </select>
                        </label>
                        <label>
                            What is your email (optional, will not be posted)?:
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="posts">
                    {data.map(d => (
                        <div className="post">
                            <p className="time">{d.time}</p>
                            <p className="name">{d.name}</p>
                            <p className="desc">{d.desc}</p>
                            {d.visible && <p className="msg">{d.msg}</p>}
                        </div>
                    ))}
                </div>
            </div>
            {/* {showPopup && <dialog className="popup" open>
                {errors.length ? "ERROR": "Your message was sent!"}
                {errors.map(e => (
                    <p>{e}</p>
                ))}
            </dialog>} */}
        </div>   
    );
}

export default Guestbook;