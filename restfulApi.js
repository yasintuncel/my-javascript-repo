const express = require('express');
const deviceRoutes = express.Router();
const { Device } = require('../../../database/models/device');

deviceRoutes.get('/', async function (req, res) {
    try {
        const device = await Device.find({});
        if (device) {
            res.status(200).send(device);
        }
        else {
            res.status(404).send({ error: 'Content not found.' });
        }
    } catch (error) {
        res.status(404).send({ error: 'Content not found.' });
    }
});

deviceRoutes.get('/:id', async function (req, res) {
    try {
        const device = await Device.findById(req.params.id);
        if (device) {
            res.status(200).send(device);
        }
        else {
            res.status(404).send({ error: 'Content not found.' });
        }
    } catch (error) {
        res.status(404).send({ error: 'Content not found.' });
    }
});

deviceRoutes.post('/', async function (req, res) {
    const devices = await Device.find({});
    let device = req.body;
    //
    for (var i = 0; i < devices.length; i++) {
        if (devices[i].name === device.name) {
            res.status(500).send({ error: "This device already registered." });
            return;
        }
    }
    //
    let newDevice = new Device(device);
    newDevice.save();
    res.status(201).json(newDevice);
});

deviceRoutes.put('/:id', async function (req, res) {
    try {
        let device = await Device.findById(req.params.id);
        if (device) {
            device.name = req.body.name;
            device.mission = req.body.mission;
            device.office = req.body.office;
            device.subOffice = req.body.subOffice;
            //
            await device.save();
            res.status(201).json(device);
        }
        else {
            res.status(204).send({ error: 'Content not found.' });
        }
    } catch (error) {
        res.status(204).send({ error: 'Content not found.' });
    }
});

deviceRoutes.delete('/:id', async function (req, res) {
    try {
        let device = await Device.findById(req.params.id);
        if (device) {
            await device.delete();
            res.status(200).send({ result: 'Content deleted.' });
        }
        else {
            res.status(204).send({ error: 'Content not found.' });
        }
    } catch (error) {
        res.status(204).send({ error: 'Content not found.' });
    }
});

module.exports = deviceRoutes;

/*
    Usage in other files
    
    app.use('/devices', deviceRoutes);
*/