# Домашнии задания
_______________________

## Работа с GIT
```bash
#Инициализация пользователя
$ git config --global user.name "[имя]"
$ git config --global user.email "[адрес электронной почты]"

##Клонируем проект
$ git clone https://github.com/Plyton/homework.git

###Создаём свою ветку из ветки master и в ней работаем
$ git checkout -b homework

####После завершения задания 
$ git add .
$ git commit -m '[название коммита]'
$ git push origin homework
```