PROJECT = front-infrastructure
COMPOSE_FILE = 1.0/docker-compose.yml
COMPOSE_PRODUCTION_FILE = 1.0/docker-compose.production.yml

.PHONY: start
start: 
	docker-compose -f $(COMPOSE_FILE) -p $(PROJECT) up -d --build

.PHONY: logs
logs:
	docker-compose -f $(COMPOSE_FILE) -p $(PROJECT) logs

.PHONY: restart
restart:
	docker-compose -f $(COMPOSE_FILE) -p $(PROJECT) kill && \
	docker-compose -f $(COMPOSE_FILE) -p $(PROJECT) rm -f && \
	docker-compose -f $(COMPOSE_FILE) -p $(PROJECT) up -d --build

.PHONY: kill
kill: 
	docker-compose -f $(COMPOSE_FILE) -p $(PROJECT) kill

.PHONY: ps
ps: 
	docker-compose -f $(COMPOSE_FILE) -p $(PROJECT) ps

.PHONY: build
build:
	sh build.sh

.PHONY: deploy
deploy:
	docker-compose -f $(COMPOSE_PRODUCTION_FILE) 
