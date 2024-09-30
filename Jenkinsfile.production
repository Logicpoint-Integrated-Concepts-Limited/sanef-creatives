pipeline {
    environment {
        imageRepo = 'daydream/sanef-ui'
        commitSha = sh(returnStdout: true, script: "git log -1 --pretty=format:'%h'").trim()
        imageName = "${imageRepo}:${commitSha}"
        dockerImage = ''
    }

    agent any
    stages {
        stage('Clone Source') {
            steps {
                // Clone the new repository
                git url: 'https://github.com/Logicpoint-Integrated-Concepts-Limited/sanef-creatives', branch: 'main'
            }
        }
        stage('Build Image') {
            steps {
                script {
                    dockerImage = docker.build(imageName)
                }
            }
        }
        stage('Deploy Application') {
            steps {
                sh 'docker stop dd-sanef-ui || true && docker rm dd-sanef-ui || true'
                sh 'docker run -d --restart=unless-stopped -p 3021:3333 --name dd-sanef-ui --env-file ~/env/ui.prod.env ${imageName}'
            }
        }
        stage('Cleanup Build') {
            steps {
                sh 'docker system prune -a -f || true'
            }
        }
    }
}
