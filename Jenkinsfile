
pipeline {
    agent any

    environment {
        CI = 'true'
    }

    options {
        disableConcurrentBuilds()
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Chromium') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --project=chromium --workers=1 --retries=0'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**,test-results/**',
                allowEmptyArchive: true
        }
    }
}
