## Brasen Xu Personal Website

**Address:** https://www.brasen.dev/

### Steps to get into vm because I keep forgetting:
1. enter into vm using cmd (check moroccangemserver)
2. `screen -r` to attach to dotnet screen
3. ctrl-c to stop the process
4. run `git pull`
5. run following commands: `dotnet restore` and `dotnet publish -c Release -o out`
6. run `sudo lsof -i :5000` to see if any processes are still running
7. if so, run `sudo kill -9 <PID>` to kill them
8. cd into `out`
9. run `dotnet WebsiteV2.dll`
10. call "ctrl-a d" key sequence to detache from current screen session
