FROM ubuntu:20.04
RUN apt update -y
RUN apt install tree -y
COPY test.sh /home
RUN  chmod 777 /home/test.sh
RUN apt install wget -y
#ADD https://www.free-css.com/assets/files/free-css-templates/download/page276/gymnast.zip  /home
#RUN mkdir -p /home/gymnast
#CMD ./home/test.sh
RUN apt install tar 
ADD apache-tomcat-10.0.20.tar.gz  /home
#RUN tar -xvvf apache-tomcat-10.0.20.tar.gz
