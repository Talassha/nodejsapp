pipeline {
  agent any

    stage('Instalar dependencias') {
      steps {
        dir("$WORKDIR") {
          sh 'npm install'
        }
      }
    }

    stage('Build Docker') {
      steps {
        dir("$WORKDIR") {
          sh "docker build -t $APP_NAME ."
        }
      }
    }

    stage('Reiniciar contenedor') {
      steps {
        sh '''
          docker stop $CONTAINER_NAME || true
          docker rm $CONTAINER_NAME || true
          docker run -d --name $CONTAINER_NAME -p $PORT:3000 $APP_NAME
        '''
      }
    }
  }

