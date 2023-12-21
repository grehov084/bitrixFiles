<?
/*
README:

	Данный скрипт производит запись данных формы в инфоблок

	Инфоблок выбирается в настройках компонента

	В случае добавления/удаления полей в форме:

	1. Создать/удалить свойства в соответсвующем инфоблоке
	2. Дописать/удалить свойства в массиве PROP:
	   - имена полей в массиве PROP указываем в соответствии с символьным кодом свойств инфоблока (так скрипт поймет, куда записать информацию)
	   - имена полей массива POST берем из ajax.js, где обрабатывается форма (массив data)  

*/
	use Bitrix\Main;
	 require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
	 define("NO_KEEP_STATISTIC", true);
	 define("NOT_CHECK_PERMISSIONS", true);
	 require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
	 CModule::IncludeModule('iblock');
	 if (!empty($_REQUEST['name']) and !empty($_REQUEST['sirname'])){
	   $el = new CIBlockElement;
	   $iblock_id = $_POST['iblock_id'];
	   $PROP = array();
	   $PROP['SIRNAME'] = $_POST['name']; 
	   $PROP['NAME'] = $_POST['sirname'];
	   $PROP['PATRONYMIC'] = $_POST['patronymic']; 
	   $PROP['PHONE'] = $_POST['phone'];
	   $PROP['EMAIL'] = $_POST['email'];
	   $PROP['SECTION'] = $_POST['section'];
	   $PROP['PART_TYPE'] = $_POST['partType'];
	   $PROP['WORK_PLACE'] = $_POST['workPlace'];
	   $PROP['POS_AT_WORK'] = $_POST['positionAtWork'];
	   $fields = array(
	     "IBLOCK_SECTION_ID" => false,
	     "IBLOCK_ID" => $iblock_id, 
	     "PROPERTY_VALUES" => $PROP,
	     "NAME" => "Заявка на участие в ГеоСибирь",
	     "ACTIVE" => "Y",
	   );
		if($ID = $el->Add($fields)){
			unset($_POST);
		}
		else{
			echo "Error: ".$el->LAST_ERROR;
		}
	 }
	 else{
		echo("Заполнены не все поля ввода");
	 } 
 ?>