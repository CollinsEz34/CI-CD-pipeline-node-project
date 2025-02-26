pipeline {
    agent {
        node {
            label 'node-agent'  // Ensure this matches your Node.js agent label in Jenkins
        }
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                url: 'git@github.com:CollinsEz34/CI-CD-pipeline-node-project.git'
                branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'  // Installs dependencies from package.json
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'npm run build'  // Run the build command (ensure it's defined in package.json)
                }
            }
        }
    }
}
