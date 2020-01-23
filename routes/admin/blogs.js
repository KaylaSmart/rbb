const express = require('express');
const { validationResult } = require('express-validator');
const multer = require('multer');

const {handleErrors, requireAuth } = require('./middlewares');
const blogsRepo = require('../../repositories/blogs');
const blogsNewTemplate = require('../../views/admin/blogs/new');
const blogsIndexTemplate = require('../../views/admin/blogs/index');
const blogsEditTemplate = require('../../views/admin/blogs/edit');
const {requireTitle, requireArticle, requireAuthor} = require('./valdators');

const router = express.Router();
const upload = multer({storage: multer.memoryStorage() });

router.get('/admin/blogpost', requireAuth, async (req, res) => {
   
    const blogs = await blogsRepo.getAll();
    res.send(blogsIndexTemplate({ blogs }));
});

router.get('/admin/blogpost/new', requireAuth, (req, res) => {
    res.send(blogsNewTemplate({}));
});


router.post(
    '/admin/blogpost/new', 
    requireAuth,
    upload.single('image'),
[requireTitle, requireArticle, requireAuthor], 
handleErrors(blogsNewTemplate),
 async (req, res) => {
    const image = req.file.buffer.toString('base64');
    const { title, article, image, author } = req.body;
    await blogsRepo.create({ title, article, image, author });

    res.redirect('/admin/blogpost');
});

router.get('/admin/blogpost/:id/edit', requireAuth,  async (req, res) => {
    const blog = await blogsRepo.getOne(req.params.id);

    if(!blog){
        return  res.send('Blog Not Found');
    }

    res.send(blogsEditTemplate({ blog }));
});

router.post('/admin/blogpost/:id/edit', 
    requireAuth, 
    upload.single('image'),
    [requireTitle, requireArticle],
    handleErrors(blogsEditTemplate, async (req) => {
        const blog = await blogsRepo.getOne(req.params.id);
        return { blog };
    }),
    async (req, res) => {
      const changes = req.body;
      
      if(req.file){
          changes.image = req.file.buffer.toString('base64')
      }
      try{
          await blogsRepo.update(req.params.id, changes)
      } catch (err) {
        return res.send('Could not find post');
      }
      res.redirect('/admin/blogpost');
    }
);

router.post('/admin/blogpost/:id/delete', requireAuth, async (req, res) => {
    await blogsRepo.delete(req.params.id)

    res.redirect('/admin/blogpost')
})

module.exports = router;