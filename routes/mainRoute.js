const requireAuth = require('../middlewares/requireAuth');
const mongoose = require('mongoose');

const Infos = mongoose.model('Info');

module.exports = app => {
  app.get('/api/info', requireAuth, async (req, res) => {
    const infos = await Infos.find({ _user: req.user._id });
    res.send(infos);
  });
  app.get('/api/info/:id', requireAuth, async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const info = await Infos.findOne({ _id: id, _user: req.user._id });
    res.send(info);
  });
  app.put('/api/info/:id', requireAuth, async (req, res) => {
    const id = req.params.id;
    await Infos.updateOne({ _id: id, _user: req.user._id }, req.body);
    const info = await Infos.findOne({ _id: id, _user: req.user._id });
    res.send(info);
  });
  app.post('/api/info', requireAuth, async (req, res) => {
    const { school, major, gpa } = req.body;
    if (!school || !major || !gpa) {
      return res.status(422).send({ error: 'Must provide school, major, gpa' });
    }
    const newInfo = new Infos({
      school,
      major,
      gpa,
      _user: req.user._id
    });
    await newInfo.save();
    res.send(newInfo);
  });
  app.delete('/api/info/:id', requireAuth, async (req, res) => {
    const id = req.params.id;
    await Infos.findByIdAndDelete(id);
    res.send({ id: id });
  });
};
