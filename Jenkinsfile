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
            checkout scm
          }
      }
      stage('Build Image') {
          steps {
            // sh 'docker build -t ${imageName} --build-arg BASE_URL=https://api.google.com'
            // dockerfile {
            //   args '-t ${imageName}'
            //   additionalBuildArgs  '--build-arg BASE_URL=https://api.google.com'
            // }
            script {
                dockerImage = docker.build imageName
            }
          }
      }
      stage('Deploy Application') {
          steps {
             sh 'docker stop dd-sanef-ui || true && docker rm dd-sanef-ui || true'
             sh 'docker run -d --restart=unless-stopped -p 3021:3333 --name dd-sanef-ui ${imageName}'
          }
      }
      stage('Cleanup Build') {
          steps {
             sh 'docker system prune -a -f || true'
          }
      }
  }
}
