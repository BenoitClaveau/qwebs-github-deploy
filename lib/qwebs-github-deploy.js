/*!
 * qwebs-github-deploy
 * Copyright(c) 2016 Benoît Claveau
 * MIT Licensed
 */

"use strict";

class GitHubDeploy {
    constructor($config) {
        if (!$config.github) throw new DataError({ message: "GitHub section is not defined in qwebs config." });
        if (!$config.mongo.connectionString) throw new DataError({ message: "Mongo connectionString is not defined in qwebs config." });
        this.$config = $config;
        
    }

    deploy(request, response) {
        var event = req.headers["x-github-event"] ||
                    req.headers["x-event-key"];

        //process
        //clone
        //restart pm2
    }
};

exports = module.exports = GitHubDeploy;
