pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                url: 'git@github.com:CollinsEz34/CI-CD-pipeline-node-project.git',
                credentialsId: 'b8d10bc7-e783-48c0-8e18-54ccaf069b22 '
        
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
