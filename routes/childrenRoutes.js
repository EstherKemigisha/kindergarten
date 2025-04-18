

// routes/children.js
const express = require('express');
const router = express.Router();
const Children = require("../models/Children");

// Display form and list of children (main page)
router.get('/', async (req, res) => {
    try {
        const children = await Children.find().sort({ createdAt: -1 });
        res.render('children', { children });
    } catch (err) {
        console.error(err);
        // ('error_msg', 'Error fetching children data');
        res.redirect('/');
    }
});

// Register a new child
router.post('/children/register', async (req, res) => {
    try {
        const { fname, lname, parentname, parentphone, age, class: classLevel, address, gender } = req.body;
        
        // Create new child
        const newChildren = new Children({
            fname,
            lname,
            parentname,
            parentphone,
            age,
            class: classLevel,
            address,
            gender
        });
        
        await newChildren.save();
        //'Child registered successfully');
        res.redirect('/');
    } catch (err) {
        console.error(err);
        // ('error_msg', 'Error registering child');
        res.redirect('/');
    }
});

// Display update form
router.get('/update/:id', async (req, res) => {
    try {
        const children = await Children.findById(req.params.id);
        if (!children) {
            req.flash('error_msg', 'Child not found');
            return res.redirect('/');
        }
        res.render('childrenList', { children });
    } catch (err) {
        console.error(err);
        // 'Error fetching child data');
        res.redirect('/');
    }
});

// Update child information
router.post('/update/:id', async (req, res) => {
    try {
        const { fname, lname, parentname, parentphone, age, class: classLevel, address, gender } = req.body;
        
        await Children.findByIdAndUpdate(req.params.id, {
            fname,
            lname,
            parentname,
            parentphone,
            age,
            class: classLevel,
            address,
            gender
        });
        
       
        res.redirect('/');
    } catch (err) {
        console.error(err);
       
        res.redirect('/');
    }
});

// Delete child
router.get('/delete/:id', async (req, res) => {
    try {
        await Children.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.redirect('/');
    }
});

module.exports = router;