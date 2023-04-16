pipeline {
    agent any

    tools {nodejs "nodejs"}
    
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Unit Test') { 
            steps {
                sh 'CI=false npm run test' 
            }
        }
    }
}