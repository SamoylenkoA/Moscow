<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Тест</title>
     <!-- Bootstrap CSS -->
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  </head>
<body>
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Количество</th>
            <th scope="col">Расстояние</th>
            <th scope="col">Дата</th>
          </tr>
        </thead>
        <tbody id='MyTable'>
        
        </tbody>
      </table>
    </div>
    <div class="col">
      <div class="form-row">
        <div class="form-group col-md-4">
          <label>Колонка</label>
          <select id="myColumn" class="form-control">
            <option value='name'>Название</option>
            <option value='quantity'>Количество</option>
            <option value='distance'>Расстояние</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label>Условие</label>
          <select id="myCondition" class="form-control">
            <option value='equally'>Равно</option>
            <option value='more'>Больше</option>
            <option value='smaller'>Меньше</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label>Текс</label>
          <input type="text" class="form-control" id="text" oninput="myFunction()">
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <nav aria-label="...">
        <ul class="pagination pagination-lg" onclick="pagination(event)">
          <!-- <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">1</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li> -->
        </ul>
      </nav>
    </div>
  </div>
</div>
<script src="api/script.js"></script>
</body>
</html>