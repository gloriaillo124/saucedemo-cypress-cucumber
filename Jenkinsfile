pipeline{
    agent{
        docker{
            image 'cypress/browser:latest'
            args 'entrypoints='
        }
    }
    stages{
        stage('installation'){
            steps{
                sh 'npm ci'
            }
        }
        stage('Run Tests'){
            steps{
                sh 'npx cypress run'
            }
        }
    }
    post{
        always{
            sh 'tools/generate_html_cucumber_report.sh'
            archiveArtifacts 'cypress/screenshots/**,rapports/**'
        }
    }
}