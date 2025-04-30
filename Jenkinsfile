pipeline {
  agent any

  stages {
    stage('Instalar dependencias') {
      steps {
        script {
          // Ejecuta npm install dentro del contenedor mynode
          sh "docker exec -T mynode npm install --prefix $WORKDIR"
        }
      }
    }

    stage('Build Docker') {
      steps {
        script {
          // Construye la imagen Docker en mynode
          sh "docker exec -T mynode docker build -t $APP_NAME $WORKDIR"
        }
      }
    }

    stage('Reiniciar contenedor') {
      steps {
        script {
          // Detener, eliminar y reiniciar el contenedor mynode
          sh "docker exec -T mynode docker stop $CONTAINER_NAME || true"
          sh "docker exec -T mynode docker rm $CONTAINER_NAME || true"
          sh "docker exec -T mynode docker run -d --name $CONTAINER_NAME -p $PORT:3000 $APP_NAME"
        }
      }
    }
  }








  // stages {  // Agregar la apertura de 'stages'
  
  //   stage('Instalar dependencias') {
  //     steps {
  //       dir("$WORKDIR") {
  //         sh 'npm install'
  //       }
  //     }
  //   }

  //   stage('Build Docker') {
  //     steps {
  //       dir("$WORKDIR") {
  //         sh "docker build -t $APP_NAME ."
  //       }
  //     }
  //   }

  //   stage('Reiniciar contenedor') {
  //     steps {
  //       sh '''
  //         docker stop $CONTAINER_NAME || true
  //         docker rm $CONTAINER_NAME || true
  //         docker run -d --name $CONTAINER_NAME -p $PORT:3000 $APP_NAME
  //       '''
  //     }
  //   }

  // }  // Cierre de 'stages'
}  // Cierre de 'pipeline'
