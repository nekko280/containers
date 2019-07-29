FROM amazonlinux:2

ARG branch="develop"

RUN yum update -y
RUN mkdir /root/.ssh
RUN amazon-linux-extras install -y nginx1.12
RUN yum install -y zip unzip tar git vim

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
COPY .bashrc /root/.bashrc
RUN source /root/.bashrc && nvm install v11.6.0 && nvm use v11.6.0 && npm install -g yarn pm2

# ssh設定追加
COPY .ssh /root/.ssh
# Apache、PHP-FPMの設定追加
COPY etc/nginx/conf.d/frontend.conf /etc/nginx/conf.d/

# パーミション変更
RUN chmod 0600 /root/.ssh/config
RUN chmod 0600 /root/.ssh/deploy_key

# 環境設定ファイルの追加
COPY etc/environment /etc/
RUN . /etc/environment

# アプリケーション設定
ENV APP_DIR=/var/project
RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR
ADD pm2.config.js $APP_DIR
RUN git clone git@github.com:novasto/ReCORE.frontend.git
WORKDIR /var/project/frontend-example001

RUN git checkout $branch
RUN source /root/.bashrc && nvm use v11.6.0 && yarn install

# 起動設定
RUN systemctl enable nginx

CMD ["/sbin/init"]
