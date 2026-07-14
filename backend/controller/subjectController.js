const Questions = require('../model/questions');

async function handleQuestions(req, res) {

    try {

        const subject = req.params.subject;

        const questions = await Questions.find({
            subject: subject
        });

        res.json(questions);

    }

    catch (err) {

        res.status(500).json({
            msg: err.message
        });

    }

}

async function handleMock(req, res) {

    try {

        const subject = req.params.subject;

        const questions = await Questions.aggregate([
            {
                $match: { subject }
            },
            {
                $sample: { size: 10 }
            }
        ]);

        res.json(questions);

    }
    catch (err) {

        res.status(500).json({
            msg: err.message
        });

    }

}

module.exports = {
    handleQuestions,
    handleMock
};