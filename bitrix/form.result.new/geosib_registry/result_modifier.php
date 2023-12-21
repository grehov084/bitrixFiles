<? 
/*
    README

    Данный скрипт производит замену стандартных полей компонента "Веб-формы" на пользовательские
    Имена классов, id, name присваиваются автоматически в зависимости от имени формы $formName (передается из template.php) 
*/
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$arResult['funcGetInputHtml'] = function($question, $arrVALUES, $formName, $IBLOCK_ID) {
        $id = $question['STRUCTURE'][0]['ID'];
        $type = $question['STRUCTURE'][0]['FIELD_TYPE'];
        $name = "form_{$type}_{$id}";
        $value = isset($arrVALUES[$name]) ? htmlentities($arrVALUES[$name]) : '';
        $valueSelect = $question['STRUCTURE'];
        $required = $question['REQUIRED'] === 'Y' ? 'required' : '';
        $class = ' ' . $question['STRUCTURE'][0]['FIELD_PARAM'];
        switch ($type){
            case 'textarea':
                $input = "<textarea class=\"form-message {$class}\" name=\"{$name}\" {$required}>{$value}</textarea>";
                break;
            case 'dropdown':
                for($i = 0; $i < count($valueSelect); $i++){
                   $options = $options . "<option>" . $valueSelect[$i]["MESSAGE"] . "</option>";
                }
                $input = "<select id=\"{$type}\" class=\"{$formName}__dropdown\" type=\"text\" name=\"{$name}\" {$required}>".$options."</select>";
                break;
            case 'radio':
                for($i = 0; $i < count($question["STRUCTURE"]); $i++){
                    $input .= "<div><input id=\"{$formName}-radio-{$i}\" type=\"radio\" class=\"{$formName}__radio\" name=\"{$name}\" {$required}>
                               <label class=\"{$formName}__label\" for=\"{$formName}-radio-{$i}\">".$question["STRUCTURE"][$i]["MESSAGE"]."</label></div>";
                }
                break;
            case 'checkbox':
                for($i = 0; $i < count($question["STRUCTURE"]); $i++){
                    $input .= "<input id=\"{$formName}-checkbox-{$i}\" type=\"checkbox\" class=\"{$formName}__checkbox\" name=\"$name\">
                               <label class=\"{$formName}__label\" for=\"{$formName}-checkbox-{$i}\">".$question["STRUCTURE"][$i]["MESSAGE"]."</label>";
                }
                break;
            case 'email':
                $input = "<input type=\"email\" class=\"{$formName}__email\" name=\"$name\" value=\"\" {$required}>";
                break;
            case 'tel':
                $input = "<input type=\"tel\" class=\"{$formName}__tel\" placeholder=\"+7 (XXX) XXX-XX-XX\" {$required}>";
                break;
            default:
                $input = "<input class=\"{$formName}__input {$class}\" id=\"{$name}\" type=\"text\" name=\"{$name}\" {$required}>";
                break;
        }
    return $input;
};
?>