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
                    bat 'npm install'  // Installs dependencies from package.json
                }
            }
        }
        stage('Test'){
            steps {
                script {
                    bat 'npm test'
                }
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube Scanner') {
                    // Run SonarQube analysis with necessary properties passed in the command
                    bat '''
                    npx sonar-scanner \
                    -Dsonar.projectKey=calculator-app \
                    -Dsonar.projectName="calculator-app" \
                    -Dsonar.projectVersion=1.0 \
                    -Dsonar.sources=. \
                    -Dsonar.exclusions=**/test/** \
                    -Dsonar.tests=test \
                    -Dsonar.language=js \
                    -Dsonar.sourceEncoding=UTF-8
                    '''
                }
            }
        }
    }

    post {
        always {
            // Clean up actions or notifications, if needed
            echo 'Cleaning up the workspace'
        }
        success {
            // Actions to perform if the pipeline is successful
            echo 'Build and analysis successful!'
        }
        failure {
            // Actions to perform if the pipeline fails
            echo 'Build or analysis failed!'
        }

    }
}
