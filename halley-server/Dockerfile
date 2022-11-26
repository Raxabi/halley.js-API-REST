FROM python:bullseye

WORKDIR /server

COPY . .

EXPOSE 5000

RUN pip install --no-cache-dir -r requirements.txt

CMD [ "flask", "--app", "main", "run", "--host", "192.168.1.59" ]