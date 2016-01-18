install:
	@npm install .

tag:
	@cat package.json | awk -F '"' '/version" *: *"/{print "v"$$4}' | xargs -I {} git tag {} & git push --tag

release: install tag
	@mkdir -p ./out
	@rsync -av .src/* ./out
	@cp LICENSE ./out
	@cp package.json ./out
	@cd ./out; npm publish

.PHONY: install tag release