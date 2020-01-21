const express = require('express');
const blogsRepo = require('../repositories/blogs');
const blogsIndexTemplate = require('../views/blogs/index');
const blogsHomeTemplate = require('../views/blogs/home');
const blogsPodTemplate = require('../views/blogs/pod');
const blogsAboutTemplate = require('../views/blogs/about');
const blogsPostTemplate = require('../views/blogs/post');

const router = express.Router();

router.get('/', async (req,res) => {
    // const blogs = await blogsRepo.getAll(); 
    res.send(blogsHomeTemplate({}));
});

router.get('/blogs', async (req,res) => {
    const blogs = await blogsRepo.getAll(); 
    res.send(blogsIndexTemplate({ blogs }));
});

router.get('/pod', async (req,res) => {
    // const blogs = await blogsRepo.getAll(); 
    res.send(blogsPodTemplate({}));
});

router.get('/about', async (req,res) => {
    // const blogs = await blogsRepo.getAll(); 
    res.send(blogsAboutTemplate({}));
});


router.get('/post', async (req,res) => {
    const blogs = await blogsRepo.getOne(); 
    res.send(blogsPostTemplate({blogs}));
});

module.exports = router;
