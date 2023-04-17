pipeline {
    agent any

    tools {nodejs "nodejs"}
    
    stages {
        stage('Install') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Unit Test') { 
            steps {
                sh 'npm run test' 
            }
        }
    }
}