# 1. Клонування та перехід в папку
git clone --branch develop https://github.com/kibit-edu-ua/ki22-ui.git
cd ki22-ui/js

# 2. Створення власної гілки
git checkout -b u1-lastname

# 3. Додавання файлів у Git та коміт
git add .
GIT_AUTHOR_NAME="lastname" GIT_AUTHOR_EMAIL="lastname@kibit.edu.ua" \
GIT_COMMITTER_NAME="lastname" GIT_COMMITTER_EMAIL="lastname@kibit.edu.ua" \
git commit -m "u1 added shopping list using JavaScript"

# 4. Відправка на GitHub
git push origin u1-lastname
