/*
* Desenvolvido por: Gustavo Duarte
*
* Função que quando se digita o valor no campo
* o nome é filtrado junto com o arquivo autoComplete.php
* com as seguintes definições mostradas abaixo
*
*/

$().ready(function() {
/* O evento ready ocorre quando o DOM (Document Object Model) foi carregado */
                $("#course").autocomplete("autoComplete.php", {
				/* Evento que verificar na div o que foi digitado e verifica no arquivo autoComplete.php */
                    width: 260,				/* Largura */
                    matchContains: true,	/* Sempre aparecer somente os que tem relação ao digitado */
                    mustMatch: true,		/* Caso não existir na lista, remover o valor */ 
                    minChars: 0,			/* Número minimo de caracteres para aparecer */
                    multiple: true,			/* Multiplas opções */
                    highlight: false,		/* Destque na resposta */
                    multipleSeparator: ",", /* Uso de vários separadores */
                    selectFirst: false		/* Vem como padrão o primeiro selecionado */
                });
            });