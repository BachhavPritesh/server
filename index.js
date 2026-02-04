const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" },
  { id: 3, name: "RONAK", role: "mentor" },
  { id: 4, name: "RAT", role: "COOK" }
];

const subject = [
  {id:1, subject:"MATHS"},
  {id:2, subject:"ENGLISH"},
  {id:3, subject:"SCIENCE"},
  {id:4, subject:"GEOGRAPHY"},
  {id:5, subject:"YOGA"}
]

app.get("/", (req, res) => {
  res.send("PRITESH STARTED THE SERVER");
});

app.get("/user", (req, res) => {
  res.send("Express user server is running");
});

app.get("/users",(req,res)=>{
    res.status(200).json(users);
})

app.get("/subject",(req,res)=>{
   res.status(200).json(subject);
});



app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.get("/subject/:id",(req,res)=>{
  const subjectId = Number(req.params.id);
  const subjects = subject.find(s => s.id === subjectId );

if(!subjects){
  return res.status(404).json({message:"Subject not found"});

}

res.status(200).json(subjects);

})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});