# Create a volume for the mongo container
docker.exe volume create --name=mongodata

# Cleanup any old mongo dbs and start a new mongo db
docker.exe rm mongo -f
docker.exe run `
    -d -it `
    --name mongo `
    --mount type=bind, source="${PWD}", target=/app `
    -p 27017:27017 `
    mongo

If (-NOT ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {   
    # Install a visualisation tool for mongo with Chocolatey
    cup studio3t -y
    
    # $arguments = "& '" + $myinvocation.mycommand.definition + "'"
    # Start-Process powershell -Verb runAs -ArgumentList $arguments
    # Break
}