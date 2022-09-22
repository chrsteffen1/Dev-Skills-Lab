import { Skills } from '../models/skills.js'

function index(req, res) {
  Skills.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req,res) {
  res.render('skills/new')
}

function create(req,res) {
  Skills.create(req.body)
  .then(skills => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req,res) {
  Skills.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req,res) {
  Skills.findByIdAndDelete(req.params.id)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/todos')
  })
}

function edit(req, res) {

  Skills.findById(req.params.id)
  .then(skill => {
    res.render('skills/edit', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/todos')
  })
}

function update(req,res) {
  req.body.learned = !!req.body.learned
  Skills.findByIdAndUpdate(req.params.id,req.body, {new:true})
  .then(skill => {
    res.redirect(`/skills/${skill._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/todos')
  })
}

export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
  update,
  edit,
}