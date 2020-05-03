import React, {useState, useEffect} from 'react';
import config from '../config';
import { motion, useAnimation } from "framer-motion"
const firebase = require('firebase')

function Guestbook(props) {
    const [data, setData] = useState([]);
    const [shouldRender, setShowRender] = useState(true);
    
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [msg, setMsg] = useState("");
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState("");

    const postsControl = useAnimation();
    const [newMsg, setNewMsg] = useState("post");

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        //get a reference to the database
        let ref = firebase.database().ref('messages');
        var loaded = false;

        //retrieve its data
        ref.on('child_added', (childSnapshot, prevChildKey) => {
            //this is your call back function
            //state will be a JSON object after this
            //set your apps state to contain this data however you like
            const newChild = childSnapshot.val();
            //i have previously declared a state variable like this: const [data, setData] = useState([]) so that I can make the below call
            setData(curData => [newChild, ...curData]);

            if(loaded) {
                setNewMsg("post new-post");
            }
        })

        ref.once('value', function(snapshot) {
            postsControl.start("visible");            
            loaded = true;
        });

    }, [shouldRender])

    const handleSubmit = (evt) => {
        evt.preventDefault();

       var errors = [];

        if(name.length === 0) {
            errors.push("Name required.");
        }
        else if(name.length <= 5 || name.length >= 20) {
            errors.push("Name must be longer than 5 and shorter than 20 characters.");
        }
        if(desc.length >= 100) {
            errors.push("Description must be shorter than 100 characters.");
        }
        if(msg.length === 0) {
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

    const formVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    }

    const postsVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 }
    }

    const resetAnimation = () => {
        setNewMsg("post");
    }

    return (    
        <div className="guestbook-page">
            <h1>
                Guestbook
            </h1> 
            <div className="guestbook">
                <motion.div className="form" initial="hidden" animate="visible" variants={formVariants} transition={{ duration: 0.5 }}>
                    <h2>
                        Leave your mark!
                    </h2> 
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
                        <input type="submit" value="Send Message" />
                    </form>
                </motion.div>
                <motion.div className="posts" initial="hidden" animate={postsControl} variants={postsVariants} transition={{ duration: 0.5 }}>
                    <h2>
                        Messages!
                    </h2>
                    {data.map((d, index) => (
                        <div className={index === 0 ? newMsg: "post"} onAnimationEnd={resetAnimation} key={d.time}>
                            <p className="name">{d.name}</p>
                            <p className="desc">{d.desc}</p>
                            <p className="time">{d.time}</p>
                            {d.visible && <p className="msg">{d.msg}</p>}
                        </div>
                        
                    ))}
                </motion.div>
            </div>
        </div>   
    );
}

export default Guestbook;