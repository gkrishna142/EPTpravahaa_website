pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'jayakrishnagolla'          // DockerHub username ONLY
        DOCKER_CREDS  = credentials('DOCKER_HUB')   // Jenkins credential ID
        EMAIL_TO      = 'gollajayakrishna775@gmail.com'
    }

    stages {

        // Jenkins already does "Checkout SCM"
        // ❌ Do NOT add manual checkout again

        stage('Install Dependencies') {
            steps {
                dir('Frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('Frontend') {
                    sh 'npm test'
                }
            }
        }

        stage('Build React App') {
            steps {
                dir('Frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_USER/ept-dashboard ./Frontend'
            }
        }

        stage('Docker Login') {
            steps {
                sh '''
                echo $DOCKER_CREDS_PSW | docker login \
                -u $DOCKER_CREDS_USR --password-stdin
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $DOCKERHUB_USER/ept-dashboard'
            }
        }

        stage('Deploy on EC2') {
            steps {
                sh '''
                cd /home/ubuntu/app
                docker-compose pull
                docker-compose up -d
                '''
            }
        }
    }

    post {
        success {
            emailext(
                to: "gollajayakrishna775@gmail.com",
                subject: "✅ SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                <h2>Build Successful ✅</h2>
                <p><b>Job:</b> ${env.JOB_NAME}</p>
                <p><b>Build Number:</b> ${env.BUILD_NUMBER}</p>
                <p><b>URL:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>
                """
            )
        }

        failure {
            emailext(
                to: "gollajayakrishna775@gmail.com",
                subject: "❌ FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                <h2>Build Failed ❌</h2>
                <p><b>Job:</b> ${env.JOB_NAME}</p>
                <p><b>Build Number:</b> ${env.BUILD_NUMBER}</p>
                <p><b>Logs:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>
                """
            )
        }
    }
}
