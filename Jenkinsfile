pipeline {
    agent any
    stages {
        stage('Checkout') {
            when {
                anyOf {
                    branch 'main'
                }
            }
            steps {
                checkout scm
            }
        }
        stage('Build') {
             when {
                anyOf {
                    branch 'main'
                }
            }
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
             when {
                anyOf {
                    branch 'main'
                }
            }
            steps {
                sh 'pm2 restart my-node-app'
            }
        }
    }
}

