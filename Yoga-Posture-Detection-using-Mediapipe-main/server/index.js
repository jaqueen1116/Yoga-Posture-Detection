// const express = require("express")
// // import mongoose from "mongoose"
// // import dotenv from "dotenv";
// // import userRoutes from "./routes/user.js"
// // import authComments from "./routes/comments"
// // import authRoutes from "./routes/auth.js"
// // import connect from "./db.js"
// // import cookieParser from "cookie-parser"
// // import authVideos from "./routes/videos.js"
// // import authComments from "./routes/comments.js"

// const app = express();
// //middleware and routes
// // app.use((req, res, next) => {
// //     res.header('Access-Control-Allow-Origin', '*');
// //     next();
// //   });
// app.get('/', (req, res) => {
//     // res.set('Access-Control-Allow-Origin', '*');
//     res.send( "msg: hello this is zaid server!!s" )
//     })
  
// // // app.use(cookieParser())
// // app.use(express.json())//this will allow our app to take any json file from outside 
// // app.use("/api/user" , userRoutes)
// // app.use("/api/auth" , authRoutes)
// // app.use("/api/videos" , authVideos)
// // app.use("/api/comments" , authComments)
// // app.use((err,req,res,next)=>{
// //     const status = err.status || 500;
// //     const message = err.message || "something went wrong";
// //     return res.status(status).json({
// //         success:false,
// //         status,
// //         message
// //     })
// // })   

// app.listen(8800, () => {
//     console.log("Express server running!!");
// })


require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const cors = require('cors');
const { Groq } = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
// const zaid = require("./zaid.py")

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "You are Zen AI, a friendly and highly knowledgeable virtual yoga instructor. You keep your answers concise and strictly related to yoga, breathing, posture, and physical wellness. Do not answer questions outside of this scope." },
        { role: "user", content: message }
      ],
      model: "llama-3.1-8b-instant",
    });

    res.json({ reply: completion.choices[0]?.message?.content || "I am meditating, please try again." });
  } catch (error) {
    console.error("Groq Error:", error);
    res.status(500).json({ reply: "I'm having trouble connecting to my inner self right now. Please try again later." });
  }
});

app.post('/api/mediapipe/yog1', (req, res) => {
  const pythonProcess = spawn('../.venv/Scripts/python.exe', ["main1.py"]);

  pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  pythonProcess.on('close', (code) => {
    if (code === 0) {
      res.status(200).send('MediaPipe code executed successfully');
    } else {
      res.status(500).send(`MediaPipe code failed with error code `);
    }
  });
});
app.post('/api/mediapipe/yog2', (req, res) => {
  const pythonProcess = spawn('../.venv/Scripts/python.exe', ["main2.py"]);

  pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  pythonProcess.on('close', (code) => {
    if (code === 0) {
      res.status(200).send('MediaPipe code executed successfully');
    } else {
      res.status(500).send(`MediaPipe code failed with error code `);
    }
  });
});
app.post('/api/mediapipe/yog3', (req, res) => {
  const pythonProcess = spawn('../.venv/Scripts/python.exe', ["main3.py"]);

  pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  pythonProcess.on('close', (code) => {
    if (code === 0) {
      res.status(200).send('MediaPipe code executed successfully');
    } else {
      res.status(500).send(`MediaPipe code failed with error code `);
    }
  });
});
app.post('/api/mediapipe/yog4', (req, res) => {
  const pythonProcess = spawn('../.venv/Scripts/python.exe', ["main4.py"]);

  pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  pythonProcess.on('close', (code) => {
    if (code === 0) {
      res.status(200).send('MediaPipe code executed successfully');
    } else {
      res.status(500).send(`MediaPipe code failed with error code `);
    }
  });
});
app.post('/api/mediapipe/yog5', (req, res) => {
  const pythonProcess = spawn('../.venv/Scripts/python.exe', ["main5.py"]);

  pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  pythonProcess.on('close', (code) => {
    if (code === 0) {
      res.status(200).send('MediaPipe code executed successfully');
    } else {
      res.status(500).send(`MediaPipe code failed with error code `);
    }
  });
});
app.post('/api/mediapipe/yog6', (req, res) => {
  const pythonProcess = spawn('../.venv/Scripts/python.exe', ["main6.py"]);

  pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  pythonProcess.on('close', (code) => {
    if (code === 0) {
      res.status(200).send('MediaPipe code executed successfully');
    } else {
      res.status(500).send(`MediaPipe code failed with error code `);
    }
  });
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
