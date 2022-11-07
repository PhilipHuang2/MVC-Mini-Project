const router = require('express').Router();
const { User, Project } = require('../models');

router.get('/', async (req,res) => {
    // return the homepage
    // use handlebars?
    // 
    try{
        const projectData = await Project.findAll();
        // parse out ProjectData
        // res.send(200);
        const projects = projectData.map((element)=>{
            element.get({plain:true});
        });
        res.render('homepage', {
            projects: projects
            // loggedIn: req.session.loggedIn
        })
    } catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;