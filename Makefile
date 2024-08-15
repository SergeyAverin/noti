up:
	sudo docker-compose up

front_shell:
	sudo docker exec -it noti_frontend /bin/bash

front_test:
	sudo docker exec -it noti_frontend npm run test $(path)

storybook:
	sudo docker exec -it noti_frontend npm run storybook

back_shell:
	sudo docker exec -it noti_backend /bin/bash

back_test:
	sudo docker exec -it noti_backend npm run test $(path)
