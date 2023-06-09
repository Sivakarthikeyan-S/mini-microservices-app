# A Mini Microservices App

- Create a new Post
- View the created Posts
- Comment the post
- View the comments under the respective posts

# Basic Docker Commands

- docker build .
- docker build -t [ image tag ] .
- docker run [image id or image tag]
- docker run -it [ image id or image tag ] [ cmd ]
- docker ps
- docker exec -it [ container id ] [ cmd ]
- docker logs [ container id ]

# Basic Kubernetes Commands

- kubectl version
- kubectl get pods
- kubectl exec -it [ pod_name ] [ cmd ]
- kubectl logs [ pod_name ]
- kubectl delete pod [ pod_name ]
- kubectl apply -f [ config file name ]
- kubectl describe pod [ pod_name ]