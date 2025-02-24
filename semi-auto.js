// ==UserScript==
// @name	kMp3 10 merc y ataques
// @description Pa diveltilme
// @version	10.2.1 26122024
// @author	grafilicious / gracul / Mp3 /paca kkk
// @include http://*.kingsage.gameforge.com/*
// @include http://*.kingsage.*
// @include https://*.kingsage.gameforge.com/*
// @include https://*.kingsage.*
// @exclude	http://support.*/*
// @grant	none
// ==/UserScript==
var es = {
    turnOn: 'Activado',
    turnOff: 'Desactivado',
    all: 'Todo',
    none: 'Ninguno',
    name: 'Nombre',
    amount: 'Cantidad',
    color: 'Color',
    loading: 'Cargando datos',
    close: 'Clic en la zona oscura para cerrar ',
    confirm: 'Confirmar',
    preview: 'Visualizar',
    'goto': 'Ir para',
    reset: 'Redefinir',
    fillIn: 'Llenar',
    buildOne: '1 N&iacute;vel',
    buildMax: 'N&iacute;veles',
    filter: 'Filtrar',
    beingProcessed: 'Está siendo procesado',
    resetSettings: 'Resetear configuraciones',
    adoptSettings: 'Su configuracion no se pudo guardar y se ha restablecido a la predeterminada',
    enableDisableModules: 'Activar/Desactivar módulos',
    buildingTrebuchet: ' Objetivo de catapulta',
    marketSettings: 'Configurar mercado',
    linkspy: 'Link de espionaje',
    contentTrebuchet: 'Objetivo predeterminado para ataques de catapulta',
    contentSpy: 'Crear enlace espionaje con %s espias',
    marketDefault: 'Mercado predeterminado',
    player: 'Jugador',
    settlement: 'Colonia',
    attacker: 'Atacante',
    trooppoints: 'Puntos de tropas',
    allyTrooppoints: 'Calcular puntos de tropas da alianza',
    troops: 'Tropas',
    ignore: 'Ignorar',
    unit: 'Unidad',
    nick: 'Nombre del jugador',
    ally: 'Alianza',
    target: 'Objetivo',
    arrival: 'Hora de llegada',
    defender: 'Defensor',
    retrieve: 'Reponer tropas',
    onlyAbandoned: 'Solo colonias abandonadas',
    entries: 'Entradas',
    noMatch: 'No hay coincidencia; pueblos disponibles ',
    abbr: 'S&iacute;mbolo',
    off: 'Ataque',
    def: 'Defensa',
    count: 'Conde',
    spy: 'Espía',
    stone: 'Piedra',
    wood: 'Madera',
    iron: 'Hierro',
    arrival: 'Hora de llegada',
    nameCoords: 'Digite el Nombre del jugador o sus coordenadas',
    cancelAllDestroy: 'Cancelar cola de destrucción',
    researchMissingTroops: ' Investigar tropas faltantes',
    researchStarted: 'Invetigacion iniciada',
    noMissingResearch: 'No se encontró ninguna investigacion faltante',
    selectAll: 'Seleccionar todos',
    deselectAll: 'Deseleccionar todos',
    selected: 'Selecionado',
    deselect: 'Deseleccionar',
    markSelection: 'Marcar seleccionado',
    selectedGroups: 'Grupos seleccionados',
    deleteSelection: 'Excluir seleccionado',
    targetExport: 'Exportar objetivos',
    save: 'Guardar',
    saved: 'Guardado',
    saveAttacks: 'Guardar estos ataques',
    saveThread: 'Guardar hilo',
    resetSavedAttacks: 'Resetear ataques guardados',
    highlighttroops: 'Realizar tropas',
    highlighttroopsLabel: 'Selecione tropas a realizar',
    highlighttroopsError: 'Solo puede usar la función de realizar tropas después de investigar en alquimista Mostrar Tropas',
    highlighttroopsActivate: 'Por favor, active la función de "Mostrar Tropas" abajo del mapa. Esto es necesario para realizar tropas en el mapa',
    trooplinks: 'Links de tropas',
    troopFilter: 'Filtrar tropas',
    group: 'Grupo',
    setGroup: 'Definir grupo',
    switchGroup: 'Haga clic en "OK" para cambiar al grupo "Todos"',
    highlightgroups: 'Realizar grupos',
    highlightGroupslabel: 'Selecione grupos a ser realizados',
    highlightGroupsReplacementError: 'No disponible en modo Ausencia',
    bbCode: 'Mostrar como BB-Code',
    asBBCode: 'Como BB-Code',
    bbCode: 'Mostrar com BB-Code',
    report_as_bb_code: 'BB-Code compacto',
    enableBBCodeExport: 'Activar exportar con BB-Code',
    exportBBCode: 'Exportar como BB-Code',
    reports: 'Informes',
    recipient: 'Receptor',
    forward: 'Reenviar',
    forwardSuccess: 'Reenvio exitoso',
    forwardError: 'No h&aacute; relat&oacute;rios el Nombre de usu&aacute;rio escolhido',
    sortContinent: 'Por continentes',
    masscoinFixActive: 'Producción en masa',
    sortCoords: 'Por coordenadas',
    sortPoints: 'Por puntos',
    sortName: 'Por Nombre',
    thread: 'Tema',
    goChooseThread: 'Selecciona un tema en el foro de la alianza',
    summary: 'Resumen',
    postIn: 'Esto se publicará en:',
    amountOfSetts: 'Cantidad de pueblos selecionados',
    postsToBeCreated: '%s se crearán mensajes',
    chooseThreadFirst: 'Primero tienes que seleccionar un tema en el foro de la alianza',
    formatting: 'Escoja un formato',
    header: 'Cabe&ccedil;alho',
    settlementDisplay: 'Presentación de pueblo',
    footer: 'Pie de página',
    goToBarracks: 'Ir a Barracones',
    goToMain: 'Ir al Castillo ',
    attackWithSpies: 'Enviar %s espionajes',
    attack: 'Ataque',
    attacks: 'Ataques',
    moreAttacks: 'Mis ataques',
    nextAttacks: 'Proximos %s ataques',
    noMatch: 'No hay pueblos disponibles',
    runtimecalc: 'Impacto en',
    loadAllAttacks: 'Cargar todos los ataques',
    loadingFinished: 'Cargamento concluido',
    toa: 'Tiempo de ejecucion',
    days: 'Dias',
    hours: 'Horas',
    minutes: 'Minutos',
    seconds: 'Segundos',
    withoutRuntime: 'Sin tiempo de ejecucion',
    modul: {
      marketOptions: 'Configurar mercado',
      troopsOnMap: 'Realizar tropas en el mapa',
      showAttacksOnMap: 'Salvar ataques/Mostrar ataques en el mapa',
      insertIntoRuntimeCalc: 'Insertar ataques en la calculadora de tiempo',
      highlightgroups: 'Realizar grupos',
      massdisband: 'Personalizar liberacion en masa',
      simulator: 'Personalizar simulador',
      filterOverview: 'Filtrar tropas por tiempo de llegada',
      bbCodeExport: 'Exportar en BB-Code',
      massforward: 'Renviar informes y mensajes en masa',
      trooplinks: 'Links de tropas en el Cuartel',
      targetExport: 'Exportar objetivos del mapa',
      massbuild: 'Construir en masa en el castillo',
      setGroupsOnMap: 'Definir grupos en el mapa',
      sortOwnAttacks: 'Ordenar ataques propios'
    },
    units: {
      militia: 'Milicia',
      sword: 'Templario',
      spear: 'Escudero',
      axe: 'Berseker',
      bow: 'Arquero',
      spy: 'Espía',
      light: 'Cruzado',
      heavy: 'Caballero negro',
      ram: 'Ariete',
      kata: 'Trebuchete',
      snob: 'Conde'
    },
    buildings: {
      main: 'Castillo',
      stone: 'Cantera',
      wood: 'Madereria',
      iron: 'Mina de Hierro',
      storage: 'Almacén',
      hide: 'Escondite',
      farm: 'Molino',
      barracks: 'Cuartel',
      wall: 'Muralla',
      stable: 'Establo',
      market: 'Mercado',
      garage: 'Alquimista',
      snob: 'Mansión',
      smith: 'Ofebreria',
      statue: 'Monumento'
    }
  };
  var en = {
    turnOn: 'On',
    turnOff: 'Off',
    all: 'All',
    none: 'None',
    name: 'Name',
    amount: 'Amount',
    color: 'Color',
    loading: 'Loading data',
    close: 'Click on darkened area to close',
    confirm: 'Confirm',
    preview: 'Preview',
    'goto': 'Go to',
    reset: 'Reset',
    fillIn: 'Fill in',
    buildOne: '1 Level',
    buildMax: 'Levels',
    filter: 'Filter',
    beingProcessed: 'is being processed',
    resetSettings: 'Reset settings',
    adoptSettings: 'Your settings could not be saved and have reset to default',
    enableDisableModules: 'En/disable modules',
    buildingTrebuchet: 'Default target trebuchet',
    marketSettings: 'Marketsettings',
    linkspy: 'Link spyattack',
    contentTrebuchet: 'Default target for trebuchet attacks',
    contentSpy: 'Create Link for spyattack with %s spies',
    marketDefault: 'Default',
    player: 'Player',
    settlement: 'Settlement',
    attacker: 'Attacker',
    trooppoints: 'Trooppoints',
    allyTrooppoints: 'Calculate trooppoints of alliance',
    troops: 'Troops',
    ignore: 'Ignore',
    unit: 'Unit',
    nick: 'Nickname',
    ally: 'Alliance',
    target: 'Target',
    arrival: 'Arrival',
    defender: 'Defender',
    retrieve: 'Retrieve troops',
    onlyAbandoned: 'Only abandoned settlements',
    entries: 'Entries',
    noMatch: 'No match found',
    abbr: 'Symbol',
    off: 'Offense',
    def: 'Defense',
    count: 'Count',
    spy: 'Spy',
    stone: 'Stone',
    wood: 'Wood',
    iron: 'Ore',
    arrival: 'Time of Arrival',
    nameCoords: 'Enter playername or coordinates',
    cancelAllDestroy: 'Cancel tear down queue',
    researchMissingTroops: 'Research missing troops',
    researchStarted: 'Research has been started',
    noMissingResearch: 'No missing research found',
    selectAll: 'Select all',
    deselectAll: 'Deselect all',
    selected: 'selected',
    deselect: 'deselect',
    markSelection: 'Mark selection',
    selectedGroups: 'Groups have been selected',
    deleteSelection: 'Delete selection',
    targetExport: 'Export targets',
    save: 'Save',
    saved: 'Saved',
    saveAttacks: 'Save these attacks',
    saveThread: 'Save thread',
    resetSavedAttacks: 'Dismiss saved attacks',
    highlighttroops: 'Highlight troops',
    highlighttroopsLabel: 'Select troops to be highlighted',
    highlighttroopsError: 'You can only use the "highlight troops" functionality after it has been researched with the alchemist.',
    highlighttroopsActivate: 'Please activate the "Show troops" functionality below the map. This is required to highlight troops on the map',
    trooplinks: 'Troop quicklinks',
    troopFilter: 'Filter troops',
    group: 'Group',
    setGroup: 'Set group',
    switchGroup: 'Click "OK" to switch to group "All"',
    highlightgroups: 'Highlight groups',
    highlightGroupslabel: 'Select groups to be highlighted',
    highlightGroupsReplacementError: 'Not available when in holiday replacement',
    bbCode: 'BB-Code',
    asBBCode: 'As BB-Code',
    bbCode: 'Show as BB-Code',
    report_as_bb_code: 'Short BB-Code',
    enableBBCodeExport: 'Enable BB-Code export',
    exportBBCode: 'Export settlements as BB-Code',
    reports: 'Reports',
    recipient: 'Recipient',
    forward: 'Forward',
    forwardSuccess: 'Forwarding successful',
    forwardError: 'No reports and/or username chosen',
    sortContinent: 'By continent',
    sortCoords: 'By coordinates',
    sortPoints: 'By points',
    sortName: 'By name',
    thread: 'Thread',
    goChooseThread: 'Select a thread on the alliance board',
    summary: 'Summary',
    postIn: 'This will be posted in',
    amountOfSetts: 'Amount of selected settlements',
    postsToBeCreated: '%s posts will be created',
    chooseThreadFirst: 'You have to select a thread on the alliance board first',
    formatting: 'Choose formatting',
    header: 'Headline',
    settlementDisplay: 'Settlementpresentation',
    footer: 'footer',
    goToBarracks: 'Go to barracks',
    goToMain: 'Go to castle',
    attackWithSpies: 'Attack with %s spies',
    attack: 'Attack',
    attacks: 'Attacks',
    moreAttacks: 'More attacks',
    nextAttacks: 'Next %s attacks',
    noMatch: 'No matching settlements available',
    runtimecalc: 'Impact in',
    loadAllAttacks: 'Load all attacks',
    loadingFinished: 'Loading finished',
    toa: 'Runtime',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    withoutRuntime: 'Without runtime',
    modul: {
      marketOptions: 'Marketsettings',
      troopsOnMap: 'Highlight troops on map',
      showAttacksOnMap: 'Save attacks/show attacks on map',
      insertIntoRuntimeCalc: 'Insert attacks into runtimecalculator',
      highlightgroups: 'Highlight groups',
      massdisband: 'Customize mass discharge',
      simulator: 'Customize simulator',
      filterOverview: 'Filter troops by time of arrival',
      bbCodeExport: 'Export settlements as bb-code',
      massforward: 'Massforward reports and messages',
      trooplinks: 'Troop quicklinks in barracks',
      targetExport: 'Export targets from map',
      massbuild: 'Massbuild in castle',
      setGroupsOnMap: 'Set groups via map',
      sortOwnAttacks: 'Sort own attacks'
    },
    units: {
      militia: 'Farmer\'s militia',
      sword: 'Templar',
      spear: 'Squire',
      axe: 'Berserker',
      bow: 'Long-bow',
      spy: 'Spy',
      light: 'Crusader',
      heavy: 'Black knight',
      ram: 'Battering ram',
      kata: 'Trebuchet',
      snob: 'Count'
    },
    buildings: {
      main: 'Castle',
      stone: 'Quarry',
      wood: 'Sawmill',
      iron: 'Ore Mine',
      storage: 'Warehouse',
      hide: 'Hideout',
      farm: 'Miller',
      barracks: 'Barracks',
      wall: 'Town Wall',
      stable: 'Donkey Stable',
      market: 'Market',
      garage: 'Alchemist',
      snob: 'Residence',
      smith: 'Goldsmith',
      statue: 'Memorial'
    }
  };
  var selectLanguage = function (lang) {
    switch (lang) {
      case 'mx.kingsage.gameforge.com':
        return en;
        default:
        return es
    }
  };
  var $ = 'undefined' != typeof unsafeWindow ? unsafeWindow.jQuery : jQuery || $,
  location = window.location,
  languageSelector = location.host;
  languageSelector = languageSelector.substring(languageSelector.indexOf('.') + 1, languageSelector.length);
  var loca = selectLanguage(languageSelector),
  Query = function () {
    for (var pair, query = {
    }, search = location.search.substring(1).split('&'), i = search.length; i--; ) pair = search[i].split('='),
    query[pair[0]] = decodeURIComponent(pair[1]);
    return query
  }(),
  kMp3 = {
  },
  l = loca;
  var tut_popup_content = $('#tut_popup_content');
  var tut_popup_content_minimized = $('#tut_popup_content_minimized');
  if (tut_popup_content) {
    if (tut_popup_content.css('display') != 'none') document.cookie = 'tut_status=minimized'
    tut_popup_content.css('display', 'none');
  }
  if (tut_popup_content_minimized) tut_popup_content_minimized.css('display', 'none');
  var banner_container = $('#banner_container');
  if (banner_container) banner_container.css('display', 'none');
  kMp3.module = {
  };
  !function ($) {
    var privateHelper = {
      encode: JSON.stringify,
      decode: JSON.parse
    },
    callQueue = [
    ],
    kMp3ForDom = {
      fadeOutRemove: function () {
        return this.each(function () {
          $(this).fadeOut(function () {
            $(this).remove()
          })
        })
      },
      fadeInfadeOut: function () {
        return this.each(function () {
          $(this).fadeIn(function () {
            $(this).fadeOut()
          })
        })
      },
      fadeOutfadeIn: function () {
        return this.each(function () {
          $(this).fadeOut(function () {
            $(this).fadeIn()
          })
        })
      },
      multiCheckBoxes: function (values) {
        return this.each(function (i) {
          $(this).val(values[i])
        })
      },
      resizeTextarea: function () {
        return this.each(function () {
          var textareaHeight = $(this).prop('scrollHeight'),
          windowHeight = 0.9 * window.innerHeight,
          newHeight = textareaHeight > windowHeight ? windowHeight : textareaHeight;
          $(this).css({
            height: newHeight + 'px'
          })
        })
      },
      nullifyEmptyVal: function () {
        var value = $(this).val();
        return '' === value ? 0 : value
      }
    },
    kMp3ForUtil = {
      presets: function () {
        return {
          modul: {
            troopsOnMap: !0,
            marketOptions: !0,
            showAttacksOnMap: !0,
            insertIntoRuntimeCalc: !0,
            highlightgroups: !1,
            massdisband: !0,
            simulator: !0,
            filterOverview: !0,
            bbCodeExport: !0,
            massforward: !0,
            trooplinks: !1,
            targetExport: !0,
            massbuild: !0,
            setGroupsOnMap: !0,
            sortOwnAttacks: !0
          },
          kata_select: 'statue',
          spylink_amount: 500,
          units: {
            modul: {
              off: !0,
              def: !0,
              count: !0,
              spy: !0
            },
            off: {
              one: {
                amount: 1,
                unit: 7
              },
              two: {
                amount: 1,
                unit: 9
              },
              color: '#FF8274',
              abbr: 'O'
            },
            def: {
              one: {
                amount: 1,
                unit: 8
              },
              two: {
                amount: 1,
                unit: 12
              },
              color: '#98F5FF',
              abbr: 'D'
            },
            count: {
              one: {
                amount: 1,
                unit: 11
              },
              two: {
                amount: 1,
                unit: 12
              },
              color: '#FFFAAA',
              abbr: 'G'
            },
            spy: {
              one: {
                amount: 1,
                unit: 5
              },
              two: {
                amount: 1,
                unit: 12
              },
              color: '#D15FEE',
              abbr: 'K'
            }
          },
          market: {
            opt1: {
              name: '10k',
              option: 'opt1',
              stone: 10000,
              wood: 10000,
              iron: 10000
            },
            opt2: {
              name: '50k',
              option: 'opt2',
              stone: 50000,
              wood: 50000,
              iron: 50000
            },
            opt3: {
              name: '100k',
              option: 'opt3',
              stone: 100000,
              wood: 100000,
              iron: 100000
            },
            opt4: {
              name: '200k',
              option: 'opt4',
              stone: 200000,
              wood: 200000,
              iron: 200000
            },
            opt5: {
              name: '321k',
              option: 'opt5',
              stone: 300000,
              wood: 100000,
              iron: 200000
            },
            opt6: {
              name: '213k',
              option: 'opt6',
              stone: 200000,
              wood: 100000,
              iron: 300000
            },
            d3fault: 'opt4'
          },
          highlightgroups: {
            one: {
              name: 'a',
              color: '#004563',
              group: {
              }
            },
            two: {
              name: 'b',
              color: '#A90641',
              group: {
              }
            }
          },
          trooplinks: {
            one: {
              name: 'a',
              farmer: 0,
              sword: 0,
              spear: 0,
              axe: 0,
              bow: 0,
              spy: 0,
              light: 0,
              heavy: 0,
              ram: 0,
              kata: 0,
              snob: 0
            },
            two: {
              name: 'b',
              farmer: 0,
              sword: 0,
              spear: 0,
              axe: 0,
              bow: 0,
              spy: 0,
              light: 0,
              heavy: 0,
              ram: 0,
              kata: 0,
              snob: 0
            },
            three: {
              name: 'c',
              farmer: 0,
              sword: 0,
              spear: 0,
              axe: 0,
              bow: 0,
              spy: 0,
              light: 0,
              heavy: 0,
              ram: 0,
              kata: 0,
              snob: 0
            }
          }
        }
      },
      saveSettings: function (prefix, obj) {
        var save = {
        };
        for (var i in obj) if (obj[i] instanceof Object) if (prefix.indexOf('highlightgroups') > - 1 && 'group' == i) {
          var groups = {
          };
          $('#' + prefix + i + ' input:checked').each(function () {
            var id = $(this).prop('id');
            groups[id] = id
          }),
          save[i] = groups
        } else save[i] = $.kMp3('saveSettings', prefix + i + '_', obj[i]);
         else {
          var elem = $('#' + prefix + i);
          save[i] = elem.is('input[type="checkbox"]') ? elem.prop('checked') ? !0 : !1 : 'color' == i ? isValidColor(elem.val().slice(1)) ? elem.val()  : obj[i] : elem.val()
        }
        return save
      },
      getUrlParameters: function (url) {
        for (var pair, query = {
        }, search = url.substring(url.indexOf('?') + 1).split('&'), i = search.length; i--; ) pair = search[i].split('='),
        query[pair[0]] = decodeURIComponent(pair[1]);
        return query
      },
      getGroups: function (villageId) {
        var url = '/popup.php?s=groups&m=village&village_id=' + villageId + av,
        groups = [
        ];
        return $.ajax({
          type: 'POST',
          async: !1,
          url: url,
          success: function (data) {
            $(data).find('table.borderlist').eq(0).find('tr > td').each(function () {
              var tmpIn = $(this);
              groups.push({
                name: tmpIn.text().trim(),
                id: tmpIn.find('input').attr('value'),
                checked: 1 == tmpIn.find('input:checked').length ? !0 : !1
              })
            })
          }
        }),
        groups
      },
      getSession: function (url) {
        return $.ajax({
          type: 'post',
          url: url
        })
      },
      genericBBCode: function (creator, data) {
        $('body').append('<div id="kMp3_box"><textarea style="width: 99%; max-height: 90% !important; resize: none;" id="kMp3_genericBBCode"></textarea></div><div id="kMp3_overlay" class="kMp3-backlight"></div>'),
        $('#kMp3_genericBBCode').text(creator(data)),
        $('#kMp3_overlay').fadeIn().bind('click', function () {
          $('#kMp3_overlay, #kMp3_box').kMp3('fadeOutRemove')
        }),
        $('#kMp3_box').fadeIn(),
        $('#kMp3_genericBBCode').kMp3('resizeTextarea')
      },
      prettyNumber: function (number) {
        return (number + '').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
      },
      paddedNumber: function (number) {
        return parseInt10(number) < 10 ? '0' + number : number
      },
      prettyTime: function (time) {
        return Math.floor(time / 3600) + ':' + $.kMp3('paddedNumber', Math.floor(time % 3600 / 60)) + ':' + $.kMp3('paddedNumber', Math.floor(time % 60))
      },
      queue: function (options) {
        var optionsCopy = {
        };
        for (var o in options) options.hasOwnProperty(o) && (optionsCopy[o] = options[o]);
        options = optionsCopy;
        var originalCompleteCallback = options.complete;
        options.complete = function (request, status) {
          callQueue.shift(),
          originalCompleteCallback && originalCompleteCallback(request, status),
          callQueue.length > 0 ? $.ajax(callQueue[0])  : location.reload()
        },
        callQueue.push(options),
        1 == callQueue.length && $.ajax(options)
      },
      loadKey: function (key) {
        try {
          return privateHelper.decode(window.localStorage.getItem(key))
        } catch (e) {
          return window.localStorage.getItem(key)
        }
      },
      saveKey: function (key, value) {
        return window.localStorage.setItem(key, privateHelper.encode(value))
      },
      deleteKey: function (key) {
        var value = privateHelper.decode(window.localStorage.getItem(key));
        return window.localStorage.removeItem(key),
        value
      },
      isKey: function (key) {
        return window.localStorage.getItem(key)
      }
    },
    callkMp3 = function (that, methodArray, method, args) {
      return methodArray[method] ? methodArray[method].apply(that, args)  : void $.error('Method ' + method + ' does not exist on jQuery.kMp3')
    };
    $.fn.extend({
      kMp3: function (method) {
        return callkMp3(this, kMp3ForDom, method, Array.prototype.slice.call(arguments, 1))
      }
    }),
    $.extend({
      kMp3: function (method) {
        return callkMp3(this, kMp3ForUtil, method, Array.prototype.slice.call(arguments, 1))
      }
    })
  }($);
  function identifyActiveTab(link) {
    return 0 != $('td[background*="s_back"]').find('a[href*="' + link + '"]').length
  }
  function parseInt10(arg) {
    return parseInt(arg, 10)
  }
  function isValidColor(hexcolor) {
    return /^([0-9a-f]{1,2}){6}$/i.test(hexcolor)
  }
  function printf(string, s) {
    if (s instanceof Array) {
      var o = string;
      for (var i in s) s.hasOwnProperty(i) && (o = o.replace('%s', s[i]));
      return o
    }
    return string.replace('%s', s)
  }
  function calculateTroopScore(playerPage) {
    var playerPage = $(playerPage),
    cachedTable = playerPage.find('table.borderlist').eq(2),
    totalScore = cachedTable.find('tr:nth-child(3) > td:last').html().replace(/\./g, ''),
    cities = cachedTable.find('tr:nth-child(5) > td:last').html().replace(/\./g, ''),
    bonusScore = 2250 * (cities - 1),
    troopScoremax = 10000 * cities,
    startIndex = playerPage.find('table.borderlist').eq(3).find('tr > th:last').parent().index(),
    cityScore = 0;
    return bonusScore = 0 > bonusScore ? 0 : bonusScore,
    playerPage.find('table.borderlist').eq(3).find('tr:gt(' + startIndex + ')').each(function () {
        try {
          var listadoActual = $.kMp3('loadKey', 'jugadores_kMp3_by_JM');
              var colonias = '';
              colonias = $(this).find('td:nth-child(2)').html();
              colonias = colonias.substring(colonias.lastIndexOf('|')-3,colonias.lastIndexOf('|')+4)
              listadoActual=listadoActual + colonias + '; '
            $.kMp3('saveKey', 'jugadores_kMp3_by_JM', listadoActual);
      } catch {}
      cityScore += Number($(this).find('td:last').html().replace(/\./g, ''))
    }),
    [
      totalScore - (bonusScore + cityScore),
      troopScoremax
    ]
  }
  function createDate(time) {
    var date = new Date;
    date.setHours(parseInt(time[0]));
    date.setMinutes(parseInt(time[1]));
    date.setSeconds(parseInt(time[2]));
    return date
  }
  function displayAttacksWithSeconds(element) {
    function formatDate(date, text) {
      var formattedDate = text;
      formattedDate = formattedDate.replace(/\d+\.\d+\./, date.getDate() + '.' + $.kMp3('paddedNumber', date.getMonth() + 1) + '.'),
      formattedDate = formattedDate.replace(/[0-9]{2}:[0-9]{2}/, date.getHours() + ':' + $.kMp3('paddedNumber', date.getMinutes()) + ':' + $.kMp3('paddedNumber', date.getSeconds()))
      return formattedDate.slice(0, - 2);
    }
    $('table.borderlist').eq(element).find('tr').each(function () {
      var cur = $(this);
      if (cur.find('td:last > span').length > 0) {
        var incomming = cur.find('td:last > span').text().split(':'),
        servertime = createDate($('#servertime').text().split(':'));
        servertime.setSeconds(servertime.getSeconds() + parseInt(incomming[2], 10)),
        servertime.setMinutes(servertime.getMinutes() + parseInt(incomming[1], 10)),
        servertime.setHours(servertime.getHours() + parseInt(incomming[0], 10));
        var replacable = cur.find('td:nth-child(4)'),
        repl = replacable.text(),
        replacer = formatDate(servertime, repl);
        replacable.text(replacer)
      }
    })
  }
  function filterOverdueAttacks(attacks) {
    var tmp_attacks = {
    };
    $.each(attacks, function (villageId) {
      village_attacks = attacks[villageId],
      tmp_attacks[villageId] = {
      },
      tmp_attacks[villageId].length = 0;
      for (var index in village_attacks) if (village_attacks.hasOwnProperty(index)) {
        var single_attack = village_attacks[index];
        var time = parseInt(single_attack[-6]) - parseInt($('#servertime').attr('time'));
        time > 0 && (tmp_attacks[villageId].length = index + 1, tmp_attacks[villageId][tmp_attacks[villageId].length] = single_attack)
      }
      0 == tmp_attacks[villageId].length && delete tmp_attacks[villageId]
    });
    var count = 0;
    for (var item in tmp_attacks) tmp_attacks.hasOwnProperty(item) && count++;
    0 == count ? $.kMp3('deleteKey', 'kMp3_save_attacks')  : $.kMp3('saveKey', 'kMp3_save_attacks', tmp_attacks)
  }
  function displayTrooplinks() {
    var wordToDigit = {
      one: 1,
      two: 2,
      three: 3
    },
    o = '<div style="padding: 5px;"><span style="font-weight: bold;">(kMp3) ' + l.trooplinks + '</span>';
    for (var no in k.trooplinks) k.trooplinks.hasOwnProperty(no) && (o += ' <span style="font-weight: bold;">#' + wordToDigit[no] + ' </span><span class="click kMp3_mark" id="kMp3_trooplink_' + no + '">' + arrow + ' ' + k.trooplinks[no].name + ' </span> ');
    return o + '</div>'
  }
  function updateSettings() {
    k = $.kMp3('loadKey', 'kMp3_user_settings')
  }
  function isNewerVersion(vold, vnew) {
    for (var o = vold.replace(/\./g, ''), n = vnew.replace(/\./g, ''); o.length != n.length; ) o.length > n.length ? n += '0' : o += '0';
    return parseInt10(n) > parseInt10(o) ? !0 : !1
  }
  function putSettings(start_tab) {
    function switch_tabs(obj) {
      if (obj.attr('rel')) {
        $('.kMp3-content-wrapper').hide(),
        $('.kMp3-menu a').removeClass('kMp3-active');
        var id = obj.attr('rel');
        $('#' + id).slideDown(800),
        obj.addClass('kMp3-active')
      }
    }
    var html = '';
    html += '<div id="kMp3_overlay" class="kMp3-backlight"></div>',
    html += '<div class="kMp3-user-settings">',
    html += '\t<a href="#" id="kMp3_close" class="kMp3-close">',
    html += '\t\t<span class="kMp3-icons kMp3-icon-close"></span>',
    html += '\t</a>',
    html += '\t<span id="kMp3_save_success" class="kMp3-saved">' + l.saved + '<span class="kMp3-icons kMp3-icon-saved"></span></span>',
    html += '\t<div>',
    html += '\t\t<div class="kMp3-menu-wrapper">',
    html += '\t\t\t\t<span class="kMp3-heading">Kingsage Enhancement Suite<a href="http://kingsage-enhancement.com/" target="_blank"><span class="kMp3-icons kMp3-icon-home"></span></a></span><span class="kMp3-subheading">version ' + version + '</span>',
    html += '\t\t\t<div class="kMp3-menu">',
    html += '\t\t\t\t<div class="kMp3-separator"></div>',
    html += '\t\t\t\t<a href="#" id="kMp3_reset_settings">' + l.resetSettings + '</a>',
    html += '\t\t\t\t<div class="kMp3-separator"></div>',
    html += '\t\t\t\t<a href="#" rel="content_modules">' + l.enableDisableModules + '</a>',
    html += '\t\t\t\t<a href="#" rel="content_trebuchet">' + l.buildingTrebuchet + '</a>',
    html += '\t\t\t\t<a href="#" rel="content_spy">' + l.linkspy + '</a>',
    html += '\t\t\t\t<a href="#" rel="content_market">' + l.marketSettings + '</a>',
    html += '\t\t\t\t<a href="#" rel="content_troops">' + l.highlighttroops + '</a>',
    html += '\t\t\t\t<a href="#" rel="content_groups">' + l.highlightgroups + '</a>',
    html += '\t\t\t\t<a href="#" rel="content_trooplinks">' + l.trooplinks + '</a>',
    html += '\t\t\t\t<div class="kMp3-separator"></div>',
    html += '\t\t\t</div>',
    html += '\t\t</div>',
    html += '\t\t<div id="content_modules" class="kMp3-content-wrapper"><div class="kMp3-content-title"><h1>' + l.enableDisableModules + '</h1></div><div class="kMp3-content"><ul>' + draw.modul(presets.modul, k.modul) + '</ul></div></div>',
    html += '\t\t<div id="content_trebuchet" class="kMp3-content-wrapper">',
    html += '\t\t\t<div class="kMp3-content-title"><h1>' + l.buildingTrebuchet + '</h1></div>',
    html += '\t\t\t<div class="kMp3-content">',
    html += '\t\t\t\t' + l.contentTrebuchet + ': <select id="kMp3_kata_select" style="width: 125px;"> ' + draw.helper.returnOptionsForObject(buildings) + '</select>',
    html += '\t\t\t</div>',
    html += '\t\t</div>',
    html += '\t\t<div id="content_spy" class="kMp3-content-wrapper">',
    html += '\t\t\t<div class="kMp3-content-title"><h1>' + l.spy + '</h1></div>',
    html += '\t\t\t<div class="kMp3-content">' + printf(l.contentSpy, '<input id="kMp3_spylink_amount" type="text" maxlength="5" size="6" value="' + k.spylink_amount + '">') + '</div>',
    html += '\t\t</div>',
    html += '\t\t<div id="content_market" class="kMp3-content-wrapper">',
    html += '\t\t\t<div class="kMp3-content-title"><h1>' + l.marketSettings + '</h1></div>',
    html += '\t\t\t<div class="kMp3-content">',
    html += '\t\t\t\t' + l.marketDefault + ':   <select id="kMp3_market_d3fault">' + draw.returnMarketDefault(k.market) + '</select>',
    html += '\t\t\t<table class="kMp3-table"><tbody>',
    html += '\t\t\t\t<tr><th><b>' + l.name + '</b></th><th><b>' + l.stone + '</b></th><th><b>' + l.wood + '</b></th><th><b>' + l.iron + '</b></th></tr>',
    html += '\t\t\t\t' + draw.returnMarketInputs(k.market),
    html += '\t\t\t</tbody></table>',
    html += '\t\t\t</div>',
    html += '\t\t</div>',
    html += '\t\t<div id="content_troops" class="kMp3-content-wrapper"><div class="kMp3-content-title"><h1>' + l.highlighttroopsLabel + '</h1></div><div class="kMp3-content">' + draw.highlighttroops(k.units.modul, units) + '</div></div>',
    html += '\t\t<div id="content_groups" class="kMp3-content-wrapper"><div class="kMp3-content-title"><h1>' + l.highlightGroupslabel + '</h1></div><div class="kMp3-content">' + draw.highlightgroups(k.highlightgroups) + '<br style="clear: left;"></div></div>',
    html += '\t\t<div id="content_trooplinks" class="kMp3-content-wrapper"><div class="kMp3-content-title"><h1>' + l.modul.trooplinks + '</h1></div><div class="kMp3-content">' + draw.trooplinks() + '</div></div>',
    html += '\t</div>',
    html += '</div>',
    $('body').append(html),
    $('#kMp3_kata_select, #kMp3_market_d3fault, #kMp3_units_off_one_unit, #kMp3_units_off_two_unit, #kMp3_units_def_one_unit, #kMp3_units_def_two_unit').kMp3('multiCheckBoxes', [
      k.kata_select,
      k.market[k.market.d3fault].option,
      k.units.off.one.unit,
      k.units.off.two.unit,
      k.units.def.one.unit,
      k.units.def.two.unit
    ]),
    $('input[class*="kMp3_color"]').keyup(function () {
      var color = $(this).val().slice(1);
      isValidColor(color) ? ($(this).css('background-color', $(this).val()), $(this).next('.kMp3-color-validation').find('span').hide().end().find('.kMp3-icon-valid').css({
        opacity: 0,
        display: 'inline-block'
      }).animate({
        opacity: 1
      }, 600))  : $(this).next('.kMp3-color-validation').find('span').hide().end().find('.kMp3-icon-invalid').css({
        opacity: 0,
        display: 'inline-block'
      }).animate({
        opacity: 1
      }, 600)
    }),
    $('.kMp3-enable, .kMp3-disable').click(function () {
      var parent = $(this).parent('.kMp3-switch');
      $('.kMp3-enable, .kMp3-disable', parent).toggleClass('selected'),
      $('.checkbox', parent).prop('checked', !$('.checkbox', parent).prop('checked')).trigger('change')
    }),
    $('.kMp3-menu a').click(function () {
      switch_tabs($(this))
    }),
    switch_tabs($('.kMp3-menu a[rel="' + start_tab + '"]')),
    setTimeout(initSettings, 50),
    $('#kMp3_overlay, #kMp3_close').bind('click', exitSettings),
    $('#kMp3_reset_settings').bind('click', function () {
      q = confirm(l.resetSettings + '?'),
      q && ($.kMp3('saveKey', 'kMp3_user_settings', presets), exitSettings(), updateSettings())
    }),
    $('.kMp3-user-settings').on('change', 'input, select', function () {
      $.kMp3('saveKey', 'kMp3_user_settings', $.kMp3('saveSettings', 'kMp3_', presets)),
      $('#kMp3_save_success').kMp3('fadeInfadeOut'),
      updateSettings()
    })
  }
  function initSettings() {
    $('.kMp3-backlight').fadeIn(200),
    $('.kMp3-user-settings').slideDown(600)
  }
  function exitSettings() {
    $('.kMp3-backlight').fadeOut(600),
    $('.kMp3-user-settings').slideUp(600),
    setTimeout(function () {
      $('.kMp3-backlight, .kMp3-user-settings').remove()
    }, 700)
  }
  var version = '10.0.0.5',
  host = location.host,
  server = location.host.split('.') [0].substr(1),
  page = document.URL,
  self = $('title').text().substring($('title').text().indexOf('- ') + 2);
  self = self.substring(0, self.indexOf(' -')).trim();
  function getVillageCoords() {
    var coords_xy = $('div.villageName > b').text();
    return coords_xy.substring(coords_xy.indexOf('|') - 3, coords_xy.indexOf('|') + 4);
  }
  var village_memory;
  function getVillageId() {
    if (!village_memory) {
      village_memory = window.location.href.substring(window.location.href.indexOf('village=') + 8);
      if (village_memory.indexOf('&') > 0) village_memory = village_memory.substring(0, village_memory.indexOf('&'));
    }
    return village_memory;
  }
  function getActiveAttackTarget() {
    var coords;
    var target = function (x_count) {
      $.ajax({
        type: 'get',
        async: false,
        url: '/game.php?village=' + getVillageId() + '&s=info_village&id=' + x_count + av,
        success: function (data) {
          var can_attack = $(data).find('a[href*="m=command"]').eq(0);
          if (!can_attack) {
            if (x_count > 500) return;
            target(x_count + 177);
          }
          else {
            coords = retrieveCoordsAsList($(data).find('a[href*="s=map&x="]').eq(0).text());
          }
        }
      })
    }
    target(1);
    return coords
  }
  function getAttackSession(village_id, target_x, target_y) {
    var current_ses = getCurrentKaSession(document);
    var last_ses = $.kMp3('loadKey', 'grac_attack_ka_session');
    if (current_ses == last_ses) return $.kMp3('loadKey', 'grac_attack_session');
    var attack_coords;
    var units = getUnitsInSettlement();
    var unit;
    for (unit in units) {
      if (units[unit] > 0) break;
    }
    if (!unit) return;
    if (!target_x || !target_y) attack_coords = getActiveAttackTarget();
     else attack_coords = [
      target_x,
      target_y
    ];
    if (!attack_coords) return;
    if (!village_id) village_id = getVillageId();
    var session;
    $.ajax({
      type: 'get',
      async: false,
      url: '/game.php?village=' + village_id + '&s=build_barracks&m=command&sub=send&support=1&' + unit + '=1&send_x=' + attack_coords[0] + '&send_y=' + attack_coords[1] + av,
      success: function (data) {
        var action = $(data).find('form:first').attr('action');
        if (action) {
          if (action.indexOf('&p=') > 0) {
            session = action.substring(action.indexOf('&p=') + 3, action.indexOf('&p=') + 7);
            current_ses = getCurrentKaSession(data)
            $.kMp3('saveKey', 'grac_attack_session', session);
            $.kMp3('saveKey', 'grac_attack_ka_session', current_ses);
          }
        }
      }
    });
    return session
  }
function getMarketSession(village_id, target_x, target_y) {
  var attack_coords;
  if (!target_x || !target_y) attack_coords = getActiveAttackTarget();
   else attack_coords = [
    target_x,
    target_y
  ];
  if (!attack_coords) return;
  if (!village_id) village_id = getVillageId();
  var mercadoSession;
  $.ajax({
    type: 'get',
    async: false,
    url:'/game.php?village=' + village_id + '&s=build_market&send_x=' + attack_coords[0] + '&send_y=' + attack_coords[1] + '&send_res1=1&send_res2=0&send_res3=0&m=send&inta=send' + av,
      success: function (data) {

      var action = $(data).find('form:first').attr('action');
      if (action) {
        if (action.indexOf('&p=') > 0) {
          mercadoSession = action.substring(action.indexOf('&p=') + 3, action.indexOf('&p=') + 7);
          if (mercadoSession.length>0) {
              $.kMp3('saveKey', 'grac_mercado_session', mercadoSession);
              var statusClass = document.querySelector('.status');
                var newElement = document.createElement("p");
                newElement.textContent = 'ID para envío de mercado guardada: ' + mercadoSession;
                statusClass.appendChild(newElement);
          }
        }
      }
    }
  });
  return mercadoSession;
}
  function getCurrentKaSession(data) {
    var current_session = $(data).find('a.widget_icon_3:first').attr('href');
    current_session = current_session.substring(current_session.indexOf('&p=') + 3, current_session.indexOf('&p=') + 7);
    return current_session;
  }
  var arrow = '<img src="img/arrow_right_raquo.png">',
  units = {
    0: l.units.militia,
    1: l.units.sword,
    2: l.units.spear,
    3: l.units.axe,
    4: l.units.bow,
    5: l.units.spy,
    6: l.units.light,
    7: l.units.heavy,
    8: l.units.ram,
    9: l.units.kata,
    10: l.units.snob
  },
  units_raw = {
    0: 'farmer',
    1: 'sword',
    2: 'spear',
    3: 'axe',
    4: 'bow',
    5: 'spy',
    6: 'light',
    7: 'heavy',
    8: 'ram',
    9: 'kata',
    10: 'snob'
  },
  units_speed_sorted = {
    0: 'spy',
    1: 'light',
    2: 'heavy',
    3: 'axe',
    4: 'farmer',
    5: 'sword',
    6: 'ram',
    7: 'snob'
  },
  units_speed_sorted_reverse = {
    'spy': 0,
    'light': 1,
    'heavy': 2,
    'axe': 3,
    'bow': 3,
    'spear': 3,
    'farmer': 4,
    'sword': 5,
    'ram': 6,
    'kata': 6,
    'snob': 7
  },
  units_short_pl = {
    farmer: 'Wiechy',
    sword: 'Tempe',
    spear: 'Giermce',
    axe: 'WuWu',
    bow: 'Luki',
    spy: 'Szpicel',
    light: 'Krzyz',
    heavy: 'Czorny',
    ram: 'Tratan',
    kata: 'Kata',
    snob: 'GRUBAS'
  },
  units_short_es = {
    farmer: 'Milicia',
    sword: 'Templario',
    spear: 'Escudero',
    axe: 'Hachas',
    bow: 'Arquero',
    spy: 'Espia',
    light: 'Cruzado',
    heavy: 'Negro',
    ram: 'Ariete',
    kata: 'Trebu',
    snob: 'Conde'
  },
  unit_runtime = {
    farmer: 20,
    sword: 22,
    spear: 18,
    axe: 18,
    bow: 18,
    spy: 9,
    light: 10,
    heavy: 11,
    ram: 30,
    kata: 30,
    snob: 35
  },
  unit_img = {
    farmer: '/img/units/unit_farmer.png',
    sword: '/img/units/unit_sword.png',
    spear: '/img/units/unit_spear.png',
    axe: '/img/units/unit_axe.png',
    bow: '/img/units/unit_bow.png',
    spy: '/img/units/unit_spy.png',
    light: '/img/units/unit_light.png',
    heavy: '/img/units/unit_heavy.png',
    ram: '/img/units/unit_ram.png',
    kata: '/img/units/unit_kata.png',
    snob: '/img/units/unit_snob.png',
    unknown: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAIAAAAS8MqlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACSSURBVDhPYzi/OpUMBNL26/4qktBg0HatTo0BCVjWTUJTgEXbpkioahRglHANSQ2GtgMJllCFar0HgCJVKVAuQ8p8mBos2ua7QFVFVoFFiNSGghB6GBhcNiFJ4dGGrAfiYATCqQ0RMKiBAUGEtSF7CY5wasOPcGmb1GtEjm201vbz3kpkCfwIl20EEFQbyWh1KgBeNbReuPgC2AAAAABJRU5ErkJggg=='
  },
  unit_img_bb = {
    farmer: '[img_farmer]',
    sword: '[img_sword]',
    spear: '[img_spear]',
    axe: '[img_axe]',
    bow: '[img_bow]',
    spy: '[img_spy]',
    light: '[img_light]',
    heavy: '[img_heavy]',
    ram: '[img_ram]',
    kata: '[img_kata]',
    snob: '[img_snob]',
    unknown: '[img_attack]'
  },
  buildings = l.buildings,
  premium = $('div.buff[style*="premium-account"]').length > 0 ? !0 : !1,
  av = Query.av ? '&av=' + Query.av : '',
  css = '';
  css += '.kMp3-backlight {display: none; position: fixed; cursor: pointer; width: 100%; height: 100%; padding: 0; margin: 0; top: 0; left: 0; background-color: black; opacity: 0.7; z-index: 199; }',
  css += '.kMp3-user-settings {display: none; position: fixed; left: 100px; right: 100px; top: 30px; bottom: 30px; background-color: white; z-index: 250; font-family: sans-serif; font-size: 14px; color: #333333; }',
  css += '.kMp3-user-settings input[type="text"], .kMp3-user-settings select {border: 1px solid #ccc; padding: 6px 4px; outline: none; border-radius: 2px; margin: 0; width: 70px; max-width: 100%; display: inline-block; margin-bottom: 5px; background: #fff; }',
  css += '.kMp3-user-settings input[type="text"]:focus, .kMp3-user-settings select:focus {border: 1px solid #aaa; color: #444; box-shadow:  0 0 3px rgba(0,0,0,.2); }',
  css += '.kMp3-user-settings select {width: 130px; padding: 4px; }',
  css += '.kMp3-user-settings ul {padding-left: 20px; }',
  css += '.kMp3-user-settings li {list-style-type: none; }',
  css += '.kMp3-icons {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdUAAACfCAQAAAAFBIvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAMaFJREFUeNrtfW1sXEW6pleytF7JurZEJHxuHHcn/qA7dn/Rjsc4jW0w+ZhrPGbZONmAsw4TPMtoMySIDCASCAxiLG1u5KDMDaMg0pMRF7jXEr6rMPHeH0wgWWA2cycdPgYUrFECAby/rh237p/9U/u+p7r6nG6fU/VWpzsxS71Hidv2c+rUqfM+VW+9x/VUVZUxY8aWnVl11rzF7GPe+WEm96PCI0MscNiaxBIUuD5r2roMF5+2+pZVg0xXCg8tc8ZuxzNWnXG8635Omv6j72/WGPxj6Mf4Sbt+TMUAGxWje//gLQnG+vFIOCVf6O+dTbLCo3f2Qr/isjZFV7LVLMSicIa8GYKsncVZAv4PMiutKFmz67AC8ECg77Em4fNBuy+atgKkBo61M2tY44Fo4BvfjdgtGWGN76ofs9dBwAfU6Dw+UPiVjCdcwaObSss7KPh9hiMAm1F6hJb/lICHOjTD/SVtP25mom50SyoYwK+y5mzLOUrJ2NoroUTe7kmn/Vl1MVmRqKxaXpygKB5dWVlFrb5mQOydwB7i0J6ubFjh7npdh1XXdKUdEAmoj3W5Db4m4QE1LVCapO1XgH2D/kB08JF83SNM9ZhZf5I9+7Rz8J/I3IIfrMb5LHcjByu+UvGUKxQ/kcaLYdZ40f8JWOkw+A4iEBtlYSmddP1HFw/dKtShd1YQrncW61ZeqsIAcmYleEIEKAhx1ry8ND6aFh/8V9VHtiPdBPGObFcRVTzQgcz40RO7WEpW0ba3k2z3i6zBvlL9xO4ka/1EVnLTSa+uo+mkNzrwWDyPcz4lWOAxAp2+TrKORXoPGvm6d5aKpzt50u4573rAOfhP1CUXfpbjl36l4XWpysmXBCr6PbGqqsTnSRvReJFj4Xl9rvYfHFko/qPrb9YYEpV1CsKxTiSrXhisap/+C+6uu/8CZVz1iWlY7fGdnKxd2eM7WS2lcof2ANfjrBHRsoomvoE+uiF/pXpsCFnJYVZIVk7UsM85PYeLXYofPYf9H42YsMdtUq/MTd79Ho4bf2S7Gq9PVRxDC6lKG1VpVBV9cvFXGr6oVycSFZ/auXWquCnKooTpFvcfy0YiWVX+I/D8UOPXvp+E5+om3JHt0IXP6MxS5U/AqovYd3l62+ltAxkkq6q7T7LR3xT+cz8gICtekEZU28Hq3d9JkEXhcfclufMmmZusgqh+5ww+7k3Vwcd9XbHh1JbiELt3Fu67QYbvmRs/Cg5by/r3TnRlZXhu7ijl5o6qlZ+rQrpkGp3PTVTZFKpwyqWabnH/ce5T6T+a+NhiV5b7vOiQWG1XNvGNzngqewJWX+O7+PupIVbDas6n8HPju1ZMXmrvkcJ/hQ1Ya89RaqlV9P+u0DacBdfrcx5rlPXMqW5+/Vv8cfLHuP4t/6ZgDdhPFR8DGRmRoMk6R6Yc9MgU65TdN+KH32y1gyJruJn9x3+Q4+1zUvkZZYoyqq52HfJR1T3OUca8Ss9VrVhgoR1nngEaUXl+EwnEj+5Lg7fIsNx/sEWwXdT+I/D8UOO75zqXdKad2WS2XFS9L3XHH/H3m9r4nePnO/7Ys/k6qErLYy0lJ6agZeeN/wwccYGT1QoEPwJqvCIveWiGhaw0jqw4olppFhqa8b/C+dTSMfJ8SlX/p+918A8+or5fxP/NTuvM3TtoeHe/ThlVC9NKslFVNwNc6blq86mEHcyuYlSiOqOvmLPKAkLhPzbxCP6j62+9f0qwwjHOiiWI80kKVVktH0mD79lpNHuEPZ9yx6Q3iKpAKUiIS+dKK4ZmEpg0z1gZ/jhD12TDPydq2A6DMfTF/CCSlRZO0fLXPJsLM9o5/J+S1UU8jHffrIaAVo2H93qXRX3g/V5fZeaqtAxwpeeqH3Trtr4z+oo5qyzjqus/uvixZ5JszVn3T9bAuDz2jM54qngC1XyGupJhFtiO+apVZZeFqvBG9bLT64cJ8zEW2juBk3sMRUbTMA9ggQX/xuNExVKRpvwrklXWFA5ZaUTl2d/RNOseP4pZYB18QoGHvnMyyNx5aXCbSf9x47s+V9Vv/Q2nBFacueFU+fxH298aemcj+AollosRz0QwI9ygM56qmBNbdKZpA5nYorobKAtV1yzEXc4xMjWQ2Xzu+E7FzK0BZnfYN3ezIOaa7cYL+L91Kw6+wooX2cJdqES1Yl3fwkumIJzZeGJX6gvVmzcdfOOV0JL6h1jjlZuVAa78e1Xd1scYiWP5mRhHlc9/9PFYhwhrwqz+fBOLKP8AaClJVcxhKRb/bHAgM5D5bBD67tR1UFX8XUSS8JcpqS8QN340V4kWuHQHNRnlvBhKfbH7Vr8H6fkKWPUwq6eGeuYgy1ZNqcPGOz6+R9SZ1V7of6CvfPi4Z0Y6zuSjamFa6bv2XhUpNzRDI2ruGXdyLNC1U/Vs9fxHH4912DsxkOnMds9tPgd/PNEpvw99qvKrPL3r8FZaC3Vl26BE558ratV5h5brrxqrSjZWe2oL/bGSS62BPrSGWgP31eFR1ZYP7/23Jv5tWjqelgG+Me9VoU1C5X6i5fIfCh7GYRjtwIM65C/hnJc6S/9XnldPHdKgJoWtn6q6WQa0qq4yZuwG+Y/xN2PGjBkzZsyYMWPGjBkzZsyYMWPGjBkzZsyYMWPGjBkzZsyYseVnpcgqGjNm7EYTNd1MEGK0kaUITo7BMiNUZj1D6RBgIRmWfxAO/FpHr1Vl6qOHh2WCxTJWwxWpzzycMW1rU6TJ5QMexTRpz5cqLpp7Tvw4WJlhBGp+Bo7p79qA4m5Bmngs/5fXJWZFOsN86VmYRFb3agsKnuuswqLabGc2wig6q2t+jKX3TfZN4tc1P6Y0CV1XT7c+uvjor4tXpcgXo5daH5QVaUf8fJhRy0f8ShZltOdLW1lj1bW5cG1qRVxmL77HjjgmvE9R/zPNIBmL4pz2/S4zGXS56nQyJ70tVuA43/nhhXCDWLVTsHLHWSNKIav78VHwuOp/IIMipCx1YtdARq2zGvoUS986vnXcXu35aXmpqlsfXTwuQ3eviwCdg68rVx9cjSm/72K8qp0Ka69yLaEXBOWD7i5NogZ0pBfagNRNqJFxxsqEFfWPwLL+09uwHqe3jaYjJJ1eWCSe0SKcjaeJvbvxVmCVVIo0mRsZbeHSfvd3JVC1cDG3mnyFKyZVeNRZBYmKOKvFKsJysjg6o+zmrAAX9OBrN1HQg9KAVKq66wPik8r6uPCT1iQBH4jbAtCO9c7Gmb8KgVM+fqdTH/yu9bWEasxz4a06Nd5xLnewJl9aLgT0WD2Vqon8Ot6IYncG62CUwRrSIF/gCGtkgnsnosow2zrYZMcO3HPU/iPwqxhxq40cvmkhMjI00/aV/G5xiVySOYQtkapLVRdU5HNTVb3sG3VWD28VlUA7vFWus3rbPl76oT28l06y2/aVj6ru+nC8vD4Cb/WFUMG/T4XH2hcKkKBASfsT6vpA4Buj1ydHk5BqNakbb68qVa4+Fe7kXqsqkWWbd4sS5D7Nq8qnh9fhq6ASUbCGlDUMzYSvyueGPCTnI541tkrS2bvxqGrS9jZl7inw218N/e75+2RdsdMygrCWQjrAh6pe8igqsjo4SsrB0VkV1VPprIau8tLvS92Xk+gMXVU0X8ZyaqQIe9z14TWS14fjYceRL+1585dWnQL/P5PsR790/+RHvwQRrA/U9YliQHhQVZ/kNwJPM6d8qumNqgkP/0mw8lE1zh7dUfyzR3fECSoZKDuzd6IZZrcwKtdQ8FVVjzwQWaTGlIj/8bZ2hrK8/mKhznTC9jV7MiHrLH2pir3s0qaWj5Q6KQe3zmoyT2uZzqoVE5InEAzWijBJLnFcKMQlb2pRH8sWpuLEltWH42E86rbr1I2LlGV43EFndIv7J6NbZDvXuNsHHvmrqvpgcshjZLvsG56mlmoIoIpQuUZV3SSUF1VlSr1JNtlU/LPJJlp9qqruehS/3vUolXr3DHZmdah6zyC/m3sGfdu/353R5d2ebHiTzlX1GloX7+isiscu11nlsp9izM7nFX8lu4aOEJeoD253wLdAkNfHqb+4Uzne1nzFunMl2j7LFl/1byOn/J452FykRVV+/wUv3dqB93QSKHKdW71RtRSqWnUDmQP7T287sJ/L6B3bIU1yVbtd284wVNPqYwVwRMWR1T8ALqz12mMbzupQde2xzeesGEaAsoCZ+7I7D5y8HqqKTF+5qaqrs4r5U97TYn24Ui+MSl/L5w4rGd/UaKUyJBf1YbWjaZALrVXVx6m/uFM5Pr+N0IR9NxOqNnLKB6m1enX53u354H7lm700rf1vxKgKMUqcrYAU0Qq1jF6xzJjjwH6jGB6jaR4AQ964gTXA/zUUPFDv2r6dcu8vxEe+Hv9Z62vgq7WUlzWibUsKgIsTMuWnqp7OqjUswt/eP/ExJx8CD9Nqw5NRlPrAcBdU67668PbGCiq8837RST9I1ded8qspOrT6urVcqfn5++j4So+qOjPn0bQXVUcVbylY8MQuzMOLvLHqKgJ/aotc974YP33f44mOxUd+QXtZI8ZXERIvM6rq6ay2vyHKvOOP+D3f70P2ZwTFdQkq1P71dV/18N6uK6tRZeuDNcJ3rzr4ys9V6Ybqy0upij9VnFeLGzFqXMfGUzUvHTyrAXo3UF7W8PeqPBMsU6QUvxVqiFVVOPzcEKrq6Kx2LIoyh1/G74dfFt/7adrru4qu7qseXp+qpdYHE1IDGTUeXnak9k5sPkfXuV36Z4X+9Xf2vHMO+W4LelR1Tz2KPy8Pk9Pb/XrGsmM+2v4Gzp8YYrYjN9a7Y2eS5mu//t6bVJ1VlwJqkPepKi1UPRVd3fro43V1fa+jPt2o2k7QrQ3Z+A4dnVsNXeKUBzolL1+bDK7rU/d6XTZELtRtroeDrMTsRDdVxowZM2bMmDFjxowZM2bMmDFjxowZM2bMmDFjxowZM2bMmDFjxowZM2bMmDFjBeb6o+y0Pt5KEzRo61BQha4rq6dBmzsnnUdfrlhLodptTKuFmDVJLn0sd0ZGdafebSRTli2lRY0tO8OVCkMzSS0VYAfPQuvfUp3VeDG+iNKTVLFK3ZU7aM6KnDijC0TqWfiqSo2CGxdvO7TnwP7e2RBZwpo1jB9Nss3n5Eu3rMmwTX+dtTuaqr4lULqUjgBkOUvuaJT4gG7ntEQYW3qvxWdWaOgsrn8SpSdDAxm6CnAhXk3WKLNXSzKqWKU+VVGCxCXi9rBegxCbcDgJy73WXiOQzpbYhBUUKy5Al9TxZ+pD6nolyZQaBC1QcgsKloK4S79Y/4gKvIWCpm7TwRa3Pr271z2L1ZTe0ajwxWVTFnZSl9cVo5JMl3qq8r3WNSU5VVFTIKKhAlyMV5HVq9nKS9X2J9xomXApF8O0Ckq3lHKYaKHfDZ7unU0wykYMos4oZh1fpFI18QcvyS8vpwJH7+QrGPOqi/X+o7EOtngJHDEi6L/+s6hlU/D6CzWFkAqt1jpU9fZmf77wPSuKNxTJURXJp6cCXIyXk7WyVEWioaCnc/zgvKzvcsbf3lmuczj6G5UcJoZr7ez5+7b/raojcFPVijWdBE3gs1SqYquqRNyKW05noTVR0lxzxxrtADVQQkBb8QA4yaiRVjGqFKqipK+sJvamNFdzeR5bmse+Cp930lWAvfEyslaWqrbu7DcFwcI3lIBq78TU0NTQ3olkXn5ZZrftQ6mrX4LAaDthLszH6iaGTa4KaZ0gHqcWFMJVlqq6Gha6AapXcHpzA2A+9y/WIqTUJ0/ySZ324drbsueLHBt5BYmKm4AEFqw6G89CemT1w/uTtfJUjRf0n3HCo++dPdC5iq1iBzqFgrAi/L26+W2rL74B0S0vUNwd91fBRFHzx7TNkOL/Ncnu/h83n6q6Ghb6qhf6AW3lAmD0F0j9pR0lQZ3a81a10iHJSLzUm9e/pRIXtfdACCJRo7YAeuPFHN6LfOvfklTWB7/+Le+zKk9V/V66+9KmNvy6qa37EiHI7otDd4QCa9F8aKImBUhkNY5MRVngeRKRjifZxqM3n6olvSrTPEMnQK1sAIyEG5liIXcATLtXVxooBCX40ttDEN/mjzQUr4MXg4Hm+6O5M1y7+hSTD4SzpPvQeOGt9Pq3vM8qjaq9s6e3UUa80qgahTzx6W2nt4UfjhK6g9DfgxxnP9+JzB7D+6ikuB8SXrEPKUSKfYZ731WOqtaYHXyNUQitm8/VPUMnQK18AIwZdXcATLvXglGwRa89kT/+eCvWeKUNIr7b/pdn/d3kUxHVC+9P1NKoauvk14gNLtTBZnFqW/3om1ngo8BHzaT9Q8Ps4eeEk20+B3vo/D0prRSwxlqvJdmdv6dQCbuMB/oqR9Xm3F3rB8CVyAAvlwC4OANMFwHUzQB3gbokPzh//PFNuSlcxK+rEeSjELUYLyOqN1WHZmQ3Jza0EBtcEGgx7wp2AkmSGGaURUlymJjHPZB/vTH4d/bcXPJXS9YenlZaBcRIEBNL/Jxn/lqJg82hnSQGbaTkeLeLydIgJQWcyw1/3Rlgan3UVHVUHIGB9lFKWq/oKkg+KlHdeGtMRlS/EMAf7955hpNV1RTFfwKhLYYpkcO0DmK+rmlBqNnzfHFgwb9GrQUbJ8GfH9QrCZjh5zReUbZ5C7R4i85IKZIe7iPEdF6tlT9AXV4ZYEHVUupTiqpxGahqZ55COsVyPGjMhsoZUhVuEYUC1cp61BaU31DOpsspEafyWxUrlW4L6tJN2VgB/kghh6a0uX8w5o3nSQ/3gYmUcgacyw2v73NLz6HVpxRV41Iy8MtUCVj9ZwDGtNqzRf0TY8aMGTNmzJgxY8aMGTNmzJgxY8aMGTNmzJgxY8aMGTNmzJgxY8ZujsFqucCyqMe0eRbGjEmI2nhR/HG6FDdmTYPuyzRFFsxGn7Euw/qXMzQ8LucGaZThkjub4WXQkmmasrIxYyU5+brm7ksJ6coR7obNoDIUgX/NSo1DlOxuxtV32QT8D/gMRcKk+WOQRvmKgrSGoRNgjuA1djarJcu/XfgzuKpUq/x57MRgjX6dmqhhorKyW1sW20ofqz5LDw/327dsPDLvLTS/WYrnS+JoZ1GwrvZM08R4nFand95Qtux+0ckDH00N9c6mvpCPkbgwbCAzmsaF1mHFiklUiBnIgGh3SqwTbbyorOjBqK2ZFHhJTaTVuaW4fJ2rVTd4y4ZTvbN+Mp0C35UdP4prB1cxaw+l/L0TQzNd2eM7Wa2VblPeAZe60pFBF+0fZbpYyll6+DgsJ4J4iTwNEms3SxV4kZ2D3sJd1vkks6V4viSOdhYF67RnmFQjd/uTO2/wH8n98sJACwjIeqFfVtDa923hbnyiHUjWte/LaB3l2FpnLV5UQW6rry2HDCmD4JavQB40nVsq1Dl4S+PFxovn1sGysmoFPsUaISwHAaxWdMs6Zfmw1A+XwnESbjglb2gUssrpU4QoMuhcUYfLXulhaWfp4fEa7bhGl7gzgLN2s1RVRBlWuGySUcjqhaesV6Vj3e0ZJZJV4OWqZY5xqTSf0p3Cui/tvlW+EA2lJIZf5p9RFSHC5LQ+vLX4EcnVdNd86SDXLMibAkc8FnTfQ/elwVvUeFRYbWZ87AO3PKnET9qhr01U2QJ8KHc6zNzjX1jaFQik0/5qN3ewtLN08bzlEyC7CkFY382mqnDZJIkaXnhaq1Kx7vakkdXB62qseJTuFObWYPAzFD0R4l6xD/Ecf2xssSvLl2W7H1HiG9k4HGc4VguHkSv+OU3L7wHrL6OqwAeejwCWb+gxNHNunWIUmwyhHut0WNncjRfbc4r9yfzXdkXAbCtAXIySZbgcLOUst2PRruI8pyiGwmn1SFZZqnKXpVHDC08VN6Nh3e1JqZE+USVk1SNqVdWGs3w7DEiv2FtiyMLB7rnOrMcjysrG4aEZHKvzAixX6XM3TlQZMQR+3dTpbRAmx7uyeycgXK2W45++twuSYu1CS0oSvm845SW3IQ+YhYAklapRl5uoz2o6qYcvplJYKSRTeaoW3rN/DOSNp+sQUrCFRFVnX0T7g+i7psZKz1zR/eoStapq306uqNaWU1U7frc/tvdPibxomHNz/Rdk4fXGo32TDjbOKFQNPBbN1V+eNMnv3BJiNfj11BbWIKNeTguq9vhOjCU4UWVqRrw3dG/npO5NedvTqepgKWedW6eHL6bS0MzH99x8qrrvwT8G8sbTqUrB5uV13Eenuv3jTO/lnZWOF94vfz2jQ1TcoGhkymlmSLrU+GPHnoH55tniRzT2jCy87vjz4fWOsmCSRNWew3sneP2jykdfcC81+OKJQG0gK9ckalbUSKi8ijPVYQ8ihZAqxakcLOUsoftIv0rSta8PyLiFVF5ReaqibyZJw4kXnkpVGlZ3Vx+n/cNM52VNuPh+A4/x1zN0oqK9kxCPHLK7QanjNvTO2sFyzN13yaTKNpyNstW/7b8g0PKdXDBIwEwlTKoaWDXqkmOoocbnk0CgSEjDgwRai7p8Tlbcyys3V02rwx57/K2mqB4XY2ln6eKF4Cq8zuqkyLhVmqrcN2nDiReeGqvQsXqKiPpk9SAqzAw/Fa9ndOTHWPWR7Tju9cydT6mwWM0I7rA67/RdMvzJjV3ZcF6wuCsr8sc+wfgTuEGU6NtW2ptF7Xvi5uELkwK0REIuyCaoHi/F0s7Sw+M1Np+DqUHjcnhZI9yVFvd54Sn0o2NLURR0yKrzsqbgfq0AzvC2/63q9YzHxSEg7Jk7tkN9HsqD7p0YyHRme+Y2n4MkTqf8HFZzagv+uQF3dXCYWil6xYH9fPotlHcP7Gcrbh7eTVZqxi8fZCtVj72wlLMEyn7Nr8Tb6sUdsmmNl/M6X2l4mqMLd7XqaHGfg3I+qemngy3NeKvrvKwput/dt9p50MZSBD0hIOyW08gdBsOsOgX4DopKL2zMFMpJa4fUDsNWQLlu5d0VNxfvNDc14+c4q1r12AtL0UrmKP6cVXiaevGNMXedKV7qoFyf1KOeBvZ6yKrzsqaoY4IGqKkyZszYjeh2qiuHNmbMmDFjxowZM2bMmDFjxowZM2bMmDFjxowZM2bMmDFjxowZM2bMmLEym65O7/cNb59Dlp1cnvWvuA8FoEYxnda02A2oVVr3SlbMmlyuNM3p9MYZTaf3+4YXZ3EZMXp7JrOdWZ36VAp/oyzwEUhYfkStC3XBXMGdZ/T3fXj+Pr0rWbHAAuhkTt7Mrobvb5ETbA24WrRYK0al01sani9qw/8rU34yL2pW7vK5OPNKG7tyXq3b7+ges9SJXQMZSn1Kxe+doOkq2488o+0yGtSwJqNK3aPrpWoUBU+19k1A4tGvBCMw4BPgpU/fW4n6U4nK97ewh4ZY00JeBg11evllhR6QXKfXwbudXYXvnf1kE67f/GQTLrClly+EoNR4WEUKomYndtHrT7tftKaTHYtIiiR76CUQO5VrGOd0jzfegd9tvIPFkXzy+gidZHthoQbeirVeo9QfhcebFqLajkWnhjUcyoum0UJyXVe3+qw9qF+5mtHDU0G8E7uGZij4MAggIB6F2W8eVdc1xxdxfwssH+sfX1zXbP8CdXqdy6p1eh28+5Dju7K49g7Xb+KaPRxZaeX3zn58D6eICg8SMCusPVaM1fK19pTyhQCoSpfYqguz3S+yBpvejQ+91HpN1tBc9xh6QxTlTMP/scNbVfUROhd8awUqXjgitpBcV9maXA0uqO9YVGpYgTULzlNrvUYZi3VcHZQx54MgrZ6XcSeO9m2/EsSjL/EHUb+dlFXYlaMqq0HJvUROWteuP1+oGlsUI4wNy400/jq9Dl4canzCFRY1nUwQykf5rYEMEnx8AKmtwsO4wkJXezZbdVFGqb+4A7UuMYq0JHFGyA7tObTHAodJSGcpXPeY1Q7N4J41sOofPkPDfyPHw3X2WAHcWqHpJBGfIyo8yAYZHgPfkKtzUsl2uTFUagQ+Sri6bRgRPiqnq+PGI4miKK7pCsnpW0amaMRz16n1NfUc1SpqUcq8liaahugm1/0mUOqI47vniptMrtNbGt5RlOGqMSr81BCrhyCvmjukGp+0FY9YfdNJlc6wwFsFUYQ/3nEQqFG9Wg1I6B7z++T33ZmV1Qfx1p5WtopFc0KSBLxD1Fo5vulKVEu2ywurogaX23R1gZ2KGXChq8u3uuoLL6lP7+yxHbQsLmuhEFVkiXODT0hNZx0RND0tKe8r2L/o/ZNoMsF/uU6vg3f3L3J8V9ZRbj23DkdJVfkBO5OYJ6oSjweEaiys1Bl28O5m8cez/s8G7Zlwv2WPrKj6JBP14LrHVgxHVBxZ8XNCWh/ET4cxcOdqOgT8mJuocvyxHY4ibqlUVVNDZ5ycGnILx3Zlp4akQezbmLEYmcKYRugSQyvVliOLW0qWuPJUZf0ndjkt1DMHCUTubajTu9R1/XV6Hbz7kOMTtpg/zt0wu5UglG/L//cJotLq4w5o1XgR8Kt1iVn10AwmkxC37qcdi7tflDU01z1mtdDAMDeH/2vXnFXVB/Awh7ddEEQ61PjmguSHHM9qsWR30C8XHiue2lCooUdVVvPkU47nPPmUXDKoHXWmu2F0tGMa1V4IelncUrLEhW1D1CvU0je0Arz+vCOL4wYsfPqBOr3FaRaZTq+Dd/e6KnwUXnPg3G3lfJRYPu6WktCqj1793TGBXJcYI4HB0825lAkmmKSPJad7LDLAuFWIqj6ID92OLghjMAGPNYF62COqCm/rZ4X2TuCj108rqalRyuyTrRCS7yCCrhCVA6IG8xHFLM7My5fFLSVLXPm00u5bU19g/XmKqyub+mL3rblfOYrrNJ3e0vAio1Wp8iuH586OYXCSfbJJrbjo6B5b800sQqqPLt5OdBHxnODHd6oFSJcE2wRqlOa8rIUH/KxFiQy675z6EoWeTNLNEt+ADDBEWCipa4/atae2uJQLhU5vF1Wn93uGF2dxdXoKUuged2vVp1J4JxDWdRpa4Fua8x7Z3jMnn6V63Xl5srjXkyWuPFWFjmhOW7mm6K71dHq/f3gx4yBjl2P9q/VdRgvdr9VCqCJdAWFbSha3mKz6RNW9W2PGjBkzZsyYMWPGjBkzZsyYMWPGjBkzZsyYMWPGjBkzZsyYMWPGjBkzVgaDZXN7TCsYM1ZICw1dWVC6QQmPPvtzn72m/6DGlfrg/DNqWUZc2dpzuOL3PW0xqhwm1PqMVtkZlcJBHsm8P2tcK13GNnkOD+/vvpO+HbsxisPqZ3TdT0lXFzf2Ye9sfDEIq+ytySDoqfXOxj4kXWUMnTfI2tidv1evSQi8FGU/3qbRAUwjleD/Ph18x/+98wrtj9KtsQi0Dl3a0gpwsU01Ta0CVY1kSfqyoDYx7f3UoPtlHse8f1m9R/Dw/u67aO1PoG6H1DPn1a1SOl4QFddrXydZdXVxI+zh53D1IwoQ4kq/h5+LqB0y1nilmfHrbD7X/09qqq4F2cz1D9hjWZ2y6aaDrJ0hldqhK/BzWi/87eze1wtEkX3P4TKeoAZBHINZDW2ZlK4AiHASrmMPI8Y8J3i7z1NLeJafYOWmKldbLGV8kY824rdC/0gp47aka2qVyNlwmbtEvlUoMnF6eIeoOenV0skqdHFhmS8s6hEKDBIdWlu/rwkwzz797NOop9acFxXzf4yBhXhOKWbvxIP7w0Bx1aiHzdH+RlXVnb+XdxwYKLcXuGE7y4scE/APPtJ8VIYXY3wC1HcHMqDG9xK1ZWlUXSrmIV9clVcFBBkPR3sKjw2n6F2BrF7Q2wWdBd2F38laNczU7bh0fJGPNs5vWUjIzsjr339h6b0Ov6zb/v5PQL897auEuMQLbXleYWvkvxO6uPFF/C6+qNLFdfSL7nrgrgccXSPZpbmgaFd2/Cjr7jrULJUd4zYeyfVBk+vfiUrnwo3vRmGcFuLeXAsI4oJ3qfhX1/SmZXg+dqE85+s/fP2HttQmaV8WvnGGeusMz/CUyV0LZbJSX8Q3CKkRfCYgYxoqj2sV1oA0ZtTxyCxKIKtVl/jcGV/EaJP4XDEWQaSE7u7oGvmVv/m1pfe6dVy3/S2JTFzPnF7n6n4S1FC5aHLDySp0cWEwr4NmVOriOg/fTVX5xTsWcdQ+tWV0i3W5TdnPWcPWQRE+hhiOgOGr/ikuFCz5oDvJpu9DAtpiHXfbakUHKfjUV7DivsUfzw2FxkbTq0D+czSNomUUojZe5LVROW9JfTTIeDz7k9Uu1UI/opZC1cLfq+sjiJokkRXlSHjsBi54OSyVzGEhrlIIVOhwZxRkNbr/iaX3+nhCt/1lio6P/AKyLkw3A0ClKu+eChVBc2R1dHQDjwUeU+viVlVh4IsHUlV8lo9JCXgYR7YH34MkVK78w+v98a2frJvCG+udFSNfnPlJRvdNwoz2X1j1QGb1b/fZwlGwSUTN+n9Jsr5JP3z3JY6/96Uk23Icf+qPFwmlnrkZe5yfifTMRdTbTsS43Bt33pXzsnEYHXHpP9UD7eniRJ3YvX2tfQdvlS9g06OqQ1SxaQmdrPE8Uf1Se1x5WcfpxweK7xRGwZryURVKa2j7yvuc7a9eP1VzOtlFh/18HV3c1vxWA/IAFSlafEjdanNX9uHnAguRfOlIJ3981O5vkYL78j1kfIPfvGoggyPi+VTn/w7aJZ9P4cgJVwj64SGgTiMex3fMMVtpf7xIKL3wU1a9+dzmc6z6hZ/aWz3UyYiKgakY4zefs+eVMf8HyLO+hf9UXUEgR9Tmj5vssv0zwJWlqkNUGNe7+WxSvd2VQ1Y5Uf0cXFYj3Jug8E4H3tOPavzLhzG1L+5zjmwAolKVz8kLJV5zMZOujm5V1WrGD6So+Cy9eH3/hWaXtH9X9nxKdUvYGHf+nq1wlO390OdTvbNtLPA8nII3Fg881gaP3/8KiIcEyLuv/xCdhdVbB8NSPCaUgKJw/Qf3P7gf7wbJJ9vvLLDQmQWJ745czTsO7O/MBhbKNapiSCTkM8cjuBFRkzQDXOy44hn4X4HvpwcZ1z7IL6d5d+NPug2nckQNOakf7wSXF1lVRF3q4JgJzonD+qSiQHPK5ehd2cG/KydVYUx92/sMaIOacsxVsRXd3+cnN7o6urpzVXxrGylI+oBAp/ThiPFo306+cR2eI3/om8+1wTiM73mty63gWLLHz8WxI/a2E3f92Qq0MSGV7Z2JxhdSJzfi52bIdePXkxu7sjCK+b6/3XAWpCFXiLrDllcrTm3ZcLZco6qgmi2HaW9EJM8Ao+PyZ/rZoMuFJZ0l77zDkPhtyu1WgF2UzLGcmXLhdyqyylrefb/5eZsrE0y7Ck6+5G/ndalqBdp9znh0h/SVk6KDKWxTn+90dXH1qNp4sfvS6W2gTgd5S8xVqgWgT25EYoNoZn3ra7w+zjYa3g+ddcBmVO8l/pD4w8B7h/YUpiA88ZCuuAeS+tsObWoDvKRGzR9jwm1VvhvDr6vsCKH5Y9/yO7B3FYrtOJ6CQGRHuUZVQbX8Jo+pgiDJ5xrq0cs9bvBx1TVdaVC8iAj5fad6Duo6uWvivLaR3S28xMqTuwnOmmwqJ1Wbj3rjYXirV4W11A5G1mRaurh6VO2+BE5Sk3Mrkogjq/n4HiB3A87AemdpOrewTUIHhMBx+L+edI36TdAN/GwjkKhe1idHmd+jjCpe2nTbe42c2NU9p3JF/bnqUpO6bp0OUfkkYWRKbMQwMiWfrlTail6KhNTdATzTfmenP9ZP82YqVdde88Y//Jw6rL1OooqelK4rm2+2W+BQvlXSc5J851GTu1InXedW8xotTClIDZ1Lv+SQng1tWcvVbrVcsb80fVmp61bTRL0LzmjJzfhS8Km66jtnogXVLan7JxCFM2HXoeZNqAxErWijfQcftDFjxowZM2bMmDFjxowZM2bMmDFjxowZM2bMmDFjxowZM2bMmDFjxoz9/2u4KsiaNO1gTOYkgWLZCarynNZV6uyy6zRcFwRkdJzX1iee/64+hRBIyIR81S6W3CtZKy+HR53neZrO8zLFT0NXdhn+H9PyuTN2Gx0sqydraWHlz8rYyAyt9KVXs7+JjBQLTzbfr0X0PUh2BQokTLBsuXhJvoED6LqNFxsvhph9BYoOXl3o2vjRBNN4jJlcMxzU6Azmya41r+cgsAakBv9R0VQdJkfnOUHUeV6O+Lav+v9p5JV9T9zzWzXescZ3caU0LHMMSkrX1kkubXlF1F7rEyWIzRaWJ1YI8UJ+vWSB16+Jzg594yoW/mr3rSqHCX6ZyHUDwY9U5a5rhvWhGVxmhkvQrMwqtq5ZXZvA853ZX3YnSRLZ1suo5rrhFOt/9umRqTbSWAaaCJdv/+cnn2omdQbN7Mmnbv9nGAX66FQFXZ1v7QXyhNqM/sY5lA6rqfNcKr53VkjTlr98EMwJxT6M/jryNUUQRvgnSgQNv4nLHP3JnWDutsQDqSHr8kGmr5jYw+quIMkKxNnnZX7Ax187qszwETXn17HPiqka+4zguOmVi21fJv5P97/GGatWadrF3es8FX0iq+mdjbrwsGhXOdZYsTb20EsYH1DGow1HhSLrxq2jP7nzL8H3lOVPr17Y9wTraH9Dpkjh2NBM+xusY98TqxesacIIzFAYpapq3+P/KX37+9BRnVHVpo2JI3RNHqcInWe+sDn/DMbUeEd3l4Lvyh7ZfmQ7X+VKK98RCFLhu7K4PPz1Hx7rO7YDZQeijBLbDN7CNS9RAXOlLzW6sk5b8gPJIRO0YSuETolQz2Ir/NG6kulJxn20+9LgLYO3dF/icZMYVT2WTUvcyp7ZBlnH3A/+NW5vnuEqysfa7naX3na3Yo7KintduOKkfJQMfglaBY0YH6h7Lej/j4j6vhK464GHXoj9m/9GVnZpz7UzkJlZYY3ZAtL8mPSrPR42boyt+GRTO5wtn820XjuwH3XqqqpeDf588L89+vNfyHcrsPoii474yuBpf90mNKHzbJMjtHeCk2nt+3J8VxaW9IecM1X4JNv9IkoH7H6RiudPQF1+B3QYG87iUkpWs6lNSL93EDrMppO87NVAP/8F/j7rT6XL6T/odmRyurIfdFOnKiTtJgh+MT6J2hPAqB2r5NbdWn1eBfkFbs1MKPTGXcJmKqomniroUZ6SYd9JFMrH8NDqnYR8lIwz1Cqwl4v3T42i6j+Nqqz655HB/3L/P7Yq8bazNIhHeXpb5GsvdORrl4JRA5bPz5a1z/ZXQ79DEtlLumsv3fp4p7w113z55FPOKmAWks/Puc6zmFGxBtzCBOKmRRm+dxaUmxqceZIKbwuR2EurWQMfcVT4Yqr64xPfJNkPzvPPLS9QdKpzHVpO7ptLzhzbUb65Kj6nid2i7Ind5VWZQLvQjyJKUTuixM/CuSa8CopMeBfSOytU4wsvK7/02k/d6LWfysMWPui7DwwGKFSym/4/xLdEXk4qqSfCcPbvt/aN/iRJpLb1V9aQ9RfUVxp+0ws9/OZKfNB/AdRfifNVVGXBxDfWsFARYP8OO0NZamvgPRzfc99VW6vlbd+ZLbz6xjuwfTuzMnz3pY13FLaAHG+rHjEeg3CRMBUegsZ+PobwMNsf3/VtErf1CkBK73LHn/Nj2bc0og7NnNgF4j9xf8UO91zVGVVV6UlWPzKF5Y9MqQSCHC/GK9Co6oS+PAwWvdyHXlT129sNpT90qWodXBLQSnKjuAPc0oDcf6eYQirBmLP+jj1r/238qAy//ljvLG59Yb/eAams1ZK5SWH5oWTscNe39uNs8Wwfe1zv+jZ2OJSkUrWq6oWfuretstKymRLkuX9mpTG5Bd1GfNWPwjvkZfM9XETC3xoLLESlOs+Ij6Jy8Zh4UZBU4peOkip8e262iVMKOX7gPfx905W+yUd+ESVq+zpEhalqrTzT4Z6rOqOqak8ljP7wCu8kVDghav/s09t2bdvlfCdPpInQl4fBwrninrF6XHZzSXZg/8iUE6jKqGqNtS2hXpskLYDOXqyg6EcMj1GvoXvbbZ+lvmCN0lT7miPbY4vWnq3juJ2ffG7iLt+qTo4k3vceTwvH1sT7yRGrmkpVVr/h7Mq8m3QsHt/pj9394mrGZ7Yt94X++23vrYHwTla2o/MMhJ0Wesz+Os8cn8CXKNPOmSp8MVXVeJA9j1mx1msq/IP7+XSrDc4YTbP+zwb3TsjlTt1EVc9oS5mr8iDYnlgo5YiEUnbxIX+xI0JfHgaXHKtjv3jvj4BSnae3jR/FuYmMqm+2jR9FNURnGj6QGT/6ZpukqQNYUYeoUenLlHxAiyLT1aFNkZej7Mh2ZUPXPvTSbdceTyRIGePeI11ZlLUMrkk93MGOKV/AHOvrYKmHg2v4CKmmKgqSOmHYfz4hE1iz58shm6pX1l7d9BqGd9KSG5y2bCfoPDv4dndnScDTdKQFHl/bBT9KaJSfYIOPI0U6ZmR4PaKWNld1PIOG0tIZ9swA29OL4mQyphFkaRm+1xafy4KMYyNoHMKsYzTt3/sABtQQPxs8tOfQHki6pOC7RllvtPtWcL9O8Z4OO4Tdt0pcEfvAIPa2ic//Gj6EYAsoiojpdLgze9s+4qaKweM7OxZxhrpGsYmHeN00kFljqwfjCIm1U78kd78uoL2FhZdk3dBhKmujq/N8o/BRFtUsv+0rePGSuf1zGV6PqEvfq9LmqvwZUF7c6e5ugE/WrgNMNW2tSdt3bD8tLsqy09vS90o4HwsWp0bUAcPqhdULFP1CLi06MoUBwMiU3SHQzurMBS9ByiNi1dtfbSXMScQonA+U4iR8vFBaW6/3paAxvUese17nGSMata7y8sRvPtcz1/Vt6HcPPyfHY3iso7db/F6VOleVay+XHmAnPf+w0H7Wpcbq+gZX0igV9WdRj7aqYmaPdjdVjnrJ6E3+M7WRqcYr2I2RS+c6zxjRNHxH8R0QQxB0qvkEQcsrS/T/yqj6FntAqcrQxpYLsVsw+DXt8P2x/wdFm3wBeW40TQAAAABJRU5ErkJggg==) no-repeat; }',
  css += '.kMp3-saved {color: #529214; height: 28px; position: absolute; right: 30px; top: 17px; display: none; width: 100px; z-index: 251; }',
  css += '.kMp3-icon-saved {background-position: -288px 0; display: inline-block; width: 15px; height: 15px; margin: -2px 5px; }',
  css += '.kMp3-close {position: absolute; top: 10px; right: 7px; z-index: 251; height: 28px; width: 28px; }',
  css += '.kMp3-close:hover .kMp3-icon-close {opacity: 0.6; }',
  css += '.kMp3-icon-close {background-position: -312px 0; display: inline-block; height: 14px; width: 14px; line-height: 14px; margin-top: 1px; vertical-align: text-top; position: relative; left: 7px; top: 5px; }',
  css += '.kMp3-icon-valid {background-position: -288px 0; display: none; height: 14px; width: 14px; line-height: 14px; margin-top: 3px; vertical-align: top; position: relative; left: 7px; top: 5px; }',
  css += '.kMp3-icon-invalid {background-position: -144px -120px; display: none; height: 14px; width: 14px; line-height: 14px; margin-top: 3px; vertical-align: top; position: relative; left: 7px; top: 5px; }',
  css += '.kMp3-menu-wrapper {overflow-y: auto; padding-top: 16px; border-right: 1px solid #D9D9D9; box-shadow: -6px 0 6px -6px rgba(0,0,0,0.2) inset; top: 0; right: 0; left: 0; bottom: 0; position: absolute; width: 212px; z-index: 150; }',
  css += '.kMp3-menu {top: 0; right: 0; left: 0; bottom: 0; margin: 0; user-select: none; }',
  css += '.kMp3-menu a {color: #21759B; display: block; font-size: 14px; line-height: 18px; margin: 0; padding: 4px 20px 4px 0; position: relative; text-decoration: none; text-shadow: 0 1px 0 #FFFFFF; text-align: right; }',
  css += '.kMp3-menu a:hover {background: none repeat scroll 0 0 rgba(0,0,0,0.04); color: #21759B; }',
  css += 'a > .kMp3-icon-home {background-position: 0 -24px; display: inline-block; height: 14px; margin: -2px 5px; width: 13px; }',
  css += 'a:hover > .kMp3-icon-home {opacity: 0.6; background-color: transparent; }',
  css += '.kMp3-menu .kMp3-active {font-weight: bold; color: #333333; }',
  css += '.kMp3-heading {display: block; font-size: 16px; font-weight: bold; line-height: 18px; margin: 0; padding: 4px 20px; position: relative; }',
  css += '.kMp3-subheading {display: block; font-size: 13px; line-height: 18px; margin: -5px 0; padding: 0 20px; position: relative; }',
  css += '.kMp3-separator {border-bottom: 1px solid #FFFFFF; border-top: 1px solid #DFDFDF; height: 0; margin: 12px 20px; padding: 0; }',
  css += '.kMp3-content {bottom: 0; height: auto; left: 213px; margin: 0; overflow: auto; position: absolute; right: 0; top: 45px; width: auto; padding: 20px; }',
  css += '.kMp3-content-title {text-overflow: ellipsis; overflow: hidden; height: 45px; left: 213px; position: absolute; right: 0; padding-right: 135px; top: 0; z-index: 200; border-bottom: 1px solid #DFDFDF; box-shadow: 0 4px 4px -4px rgba(0,0,0,0.1); }',
  css += '.kMp3-content-title h1 {font-size: 22px; font-weight: 200; line-height: 45px; margin: 0; padding: 0 16px; }',
  css += '.kMp3-content .kMp3-paragraph {background: none repeat scroll 0 0 #F5F5F5; border: 1px solid #DFDFDF; margin: 0 1%; padding: 0 1% 0; }',
  css += '.kMp3-enable, .kMp3-disable, .kMp3-enable span, .kMp3-disable span {user-select: none;background: url(data:image/gif;base64,R0lGODlhBQAOAeYAAL6+vlyRE4q8Je7u7oC0HZubm0l0EFaKEYqKimKNGJKSklxcXGCUFGmTGfDw8NjY2H2xHdLS0mSTF0JtDXWbKIaGhoKCglJ7E3mqH0tzEnyuIPX19WmfF+np6W2eGm+kGHGmGHZ2dmmZGVuFFd7e3mRkZI2NjYSEhICAgJOyV3mXTXKcH1VVVVGFD12NFVKGEIiIiHGhHI3AJ2FhYYa7HmSaFViOEleCFF6IFnx8fHBwcHp6eo+Pj2pqanJycm5ubnR0dH9/f2xsbHh4eGhoaHmtG3arGnuwHHOpGWecFmKYFGuhF+Xl5YS2I4S5HpSUlIi8H4a5H0+BD5GRkWdnZ4e5JMTExODg4HWmHc/Pz4GyImCQFXOkHX+wIYO2Hqy9lMjIyKysrPLy8nWgIG6bGrzOmbDDj87Yv9Xfw4CxHliHE3CjGHqkIX+lMnyvHW6YHYGeV3inHYa0JXquHFh/IFyCJmWWF1WAFJu2YYKwJIK0I1yPE9XV1ff392ZmZvj4+CH5BAAAAAAALAAAAAAFAA4BAAf/gACCgkyFhQ6IiH+LjI2Oj5CRkpOUlZaXmI59m5t8np4hoaEIpKQKp6dPqqqop1Ovrzyysia1taW4pRW7vL0Wv8DBQcPDOcbGO8nJQ8zMoqFA0dE+1NQ619c/2tpC3d094OBE4+NU5uYl6errLO3tDfDwEPPzUfb2UPn5NPz8Tv//vAgUSKBgQXrzjihUWKRhQyMQISKZOBGERYsfMmZcwpEjh48fk4gUWaNkSSUoUTJYuTKAy5cwbciUeaCmzZsvcuZswZOnlJ8/JwgVuqhDFit/SFjJQmIAGCaI+DzY0OdPBDGMIlRdxGfrn66MwHL1KvYr2bNh0Y5Ny3atW7Nt/+G+ncqIBAlGDvgMYNSBzxUHiwZcebDoQYEKfwCEyFHhwQ4EpwpYQGWBB6oclk9hnrXDlokQuELAKAWkl49eOoKlBvaDWJAex3IQUbbDT7Mhfp6VkAZkRjUfM7DpWLDtxwJvQhaE6zHDDzkLC/xIj7CguZ8/YVhUX5SlQolFZSg0+JNCAhkMZSTESeOFAhn2NCRg8MIvwRGACdwQEJhgjsEERdCDgxELjQCCQwZGdMMaFN3gwUUXcKDRBUl0dEENIF1gx0gGMGBShykZsAdLBtjw0gQHnHjATBO8YNMEUtiUgQE6fQFjTn+oMIEBUizyBR0TLNXBIiQcdRciTICxV/8fGzzAByNiRMBIH1Iu0seTVmL5x5VTasllll2GCeaYW3pppphlovllmmQ2WdddfwzAByJX8DHkA1fs9ccJBRD2RwU5hADAH6cgsMMDT5xiQQGo8DDZKTxsJksOnj1WCmikwBBCL6XtcoIPqgGDgg6u/RBbD7QRcVtuovjBWwm/BYfNDMUd541y4SxAjh/W+bEACtLNsEAEwrIQxh8lVJDFIm3ggcYiebCxghl/yCCDHGOgYa0MGKSwrQBtCCCuAGOMS24V6FYxRhPsNrFCu3qsoMW8WrzRxb1dvKHBvho0gMG/GPgLcANYFIxFAlwkzEUCMTQcQwIeROwBDhJPLMIuxSKMgLEIN9jhsR03SCCyBHdsYfIWF5zsAh0utHyHCi2rccEZMhtAbR1wnLFIIAA7) repeat-x; display: inline-block; }',
  css += '.kMp3-enable span, .kMp3-disable span { user-select: none; line-height: 30px; display: block; background-repeat: no-repeat; font-weight: bold; }',
  css += '.kMp3-enable span { background-position: left -90px; padding: 0 10px; }',
  css += '.kMp3-disable span { background-position: right -180px;padding: 0 10px; }',
  css += '.kMp3-disable.selected { background-position: 0 -30px; }',
  css += '.kMp3-disable.selected span { background-position: right -210px; color: #fff; }',
  css += '.kMp3-enable.selected { background-position: 0 -60px; }',
  css += '.kMp3-enable.selected span { background-position: left -150px; color: #fff; }',
  css += '.kMp3-switch {margin: 5px !important; }',
  css += '.kMp3-switch label { cursor: pointer; }',
  css += '.kMp3-switch input { display: none; }',
  css += 'td.kMp3_used { background-image: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyAzUDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAIDBAEH/8QAPRAAAgEBBQUGBAMHBAMBAAAAAAISIgEDMkJSEyFicpIRMYKisvBBUXHCBNHSM0OhscHi8RRhkfI0Y+GB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APtG146V5lMtq084dPN1HPsmRwOjbtrdvL3CV46UVVUkIo2WtObUBe1vEevmxjbtPG+HFVEhH9OEtG6QG3vJvj+0rbthSbGWOGD0hOnSBe3acStveQoMo0SwqWisBT3ra48I2rcpkmD2ojRpwgWl62d4h71sRD8/+RHxcQFvf3lePiG3Z09OKRFPKXiwJ7kBSXt4+uol71oY/dhEfMIc9PSBe3adb5fCU97rw6l+Rl0B1rrw5tQFvetXByE/FXk4imujmZjJ0lfc3ABrt24+sf6m8/8AZ5jIqmHF1AdCXt4S9+yZ8SmMZ4NPixCNEsUQLS/vJ54jbtyhPMR9vUBb/irz29RG3vAkYJQhKLO+A1e/vH1+Ebe8hn5iIq/KdEbvEAS9vOOXiG3vP7iXZa1yh2VOECtvecciXvbyD1v6u8OywyU/8EOtGoC9u0IzxYSkvbz+050WivNyl4PuAt2voONrecvCR1/aWjV4MIDa3kM5W3bI5L+rpUUzwVAU/wCKvOOQ295xyJeME977SskcUgG1bDXItL9jJF/tDqBW1vP+o2rTxvEyjQIrzRqAt79uPNqYvb3msxwJHE35F0zlD3YA27ca5c0gl/ecfLUMmcikC3vWhjcbW8RMcqSI5ffYKs8FqA1vr9q8fWZPfsj0OH09UsRFOiQFp+KvIR1Dbtn1cpk+PhylP70gWl7eccol7dtf3dxGyUU+GQFvf3k+Uh7284+UjJXiD8CYsuYC3vbzwqxH+qvNcvzJpn1CrRVz/EDXbtDVTmkNvef9ZESWepWzYi0igFpftCKZuYrb3k8+LiJeMPLpDxnxKBe1vJx+88294/KTJZ0ZdTin3SwEbVkfG8jXbs+c5YtXjb1FJ0rHxAbIzQz9chtbxP8AvHcYpRPhxf8A4Haj1AbbW81uEv242ITBzeEtIwrhUBSX95rD3959vCZa44hTriBrtWnjG1vIGTrzlxafL1AVtbyfLxhL9jKLc3qEQL2/PyzG3Yxj0yNkwaacuICtvePrjLiYnbtxkJgkXGvSA295Pi9RW3bXKOYydV8OWgIre/8AYDXa3nLpJe9aGOTc9JEa+EVeIAl/eJnLe/Z+JjHG4RcAFpf3n6lL2rZ3eVRiihFXFp6uwDa+/FNPH6iNu3HTzSITjFMK8XpAvb3mv1EbduOTUjyx8JPDi8rAa7e811Db3nl4pEJyUxLTHkpAbe8fP6i9q2enqiEjzCmepQPX/FPKl93iB5tI7qAAdoUzqUh9NFRbqsyEx1gMlAljrq/IU6/1B/NpAiWPMvUpaY+GmohFrrLRff8AsAjXk/yHlkLp94iqvEBlnyCqHL4lLx+6hHw//AI4sxaYPfeMntipUATUk2/uIf3mNfUuImn3iAh1bJSXV4m/oQkdHSWBSSJdaOZhk4W8Q9QEVI+oOwjRWH8oCng/yKq8C5i08GLmIda8D+EBT6okSaAi0/Fi+hfX4QLTBkwh5T4tQi0MFMeL4Ea8rdW8B++HOKuYAR5Y+EuVD8JaNQYx5wNqU6SH9PUEafCXkzgV0dBL8cI8VJUvekmmepmXw7wCUYMK5sRWTUTJocrDAiLqASm6NlbpFUykwavyJjzy1YgKeurT4iY0EOvPVm+paKwFZMmEmK8vq3Grr4QkZ0aQMsBXv/gPWmqn+Y65ATKsJ1MviKjRnEm5v/gCNGQnPnEVghT+lQMo5surCX0dHwtHmaXhKpAn1chVU/cSU04af4DrxARfShqDy5vzLz10kfqAX3UrKHjwKIimuHVT8AFXV/QUwF8s3z/4D5+niAiTeItJCOOE29W4irQBbrQZe9RUaPchBtFQDoUe1CY8+KRMW4FUDWK4YDi9KEXL16ZdRtJfSAqSnFHw2CrDlDx5l8wyekDGKzlm/MtJcEhyQVuoZ68IDPqEVyQqIlXW8jaXpakCEz5lIqn4i4wd2rpzZSKnhQ4GyL1R/mR74S0WCJmKShPfxAyTH7YVYtRrwk/dzARV4S5NDlIdfFJfEXHxNICM/D5S8cxko2cStfN/EDnx4/QXVrLp5mKycygSknziVHiEWRHbCxSSn0xAmfJLyiqYp4xj5pAOioioumcq6SIgHXg1cXeHjwVVSwqX6SIqmjSBFXuldwTVmHqUVaHAvPyr/MjytEJ5f6lxo1UgQkvFICLdP6g+PygXk9xHvxEShy9O6w2lXjp/iAyZ5dIeOcj3EumfvCAlbln2Axk3zdv9wBtSvv5ESaD4PSxbpmeqXVuMUWviAShxLUWRsqHGy1pGWLUBaMqYy9r1aiEi4QC8YIq90mqUdIDG8XpJlPp8IpxaW8Q2Te8IEeUunxCmFdLFQ5PtAnW2FWKlm97hT1fzAB+mJM+Th1CSimADHraQeUOYRWHvvEecBn94SpZcpPgxB8HuQEepS5Nh97hSj6pEPLEAiuHKKdBEl5S6W6f4AWjUB5ULmkOHL+RDrm05QH77mEqI4fKM+RS0x+5AYuteMVOmo6EjDh8xlFp46uQBLxfmHl6glfKauqgZRr4tJcemIeOERbqy4gGB+L1GJ0Xy0cpz6M0uoC3avmYvGQi4JB6OYDWTT5VYmUE5iEX39R6eoDolD7iJeIdH2jPXpzAJQLdYTx+Eh8n24e0cOICXx+13EJ1eo1j6SfekBVhh/kqVeomEOnqKejwgJM+uKy4txNPiUSaCKIrOXvcAk0BVzMVBcmkmnzAU7NB9P9SdGr+o9RSY9IEyIpLcimvNHVhwgWkiEVUQORfNjXMoF5I8PiHtcxaLRxEfqqAuOgxdRGjikWmDi0gQ8nfHEJRxG2Pl8Iq8wEa8dXhCUaFUJ+2rwsXTD3ECKoZJeXeWkoB/HFcwjo/uAh5TTUpCUPzSNotzcxi6tP8ATSwCTTj7YJQETwrwlotGCK+YC8acKiWb/qQi18pbxhwgEkP1UmKUJjeTeHuLRaOHygX7qEiqU5o4hNerMBMq+EJIp8elWEWnnUCapi5wZxFp8pQBL2b6fKS/qHq0lcOFogTjeQksM/6Qi0SEa+UBUE8EZfzDrd0FSbp/oAq5ScnF5d4ivhkPK2Jq/iAk3V4QRKb/AHBKAE+BKf6CU0ITHy6TbPygRKb8Ifp/IjPylx1gR5WYlFrx1S5joD9SxAxk0E97yXZnfSxTyLSM+HUBDy14sojWnDlL+4uNeoCX7KY93YA3wlL49ke7s7bQBnbk5i7vej9u+j4gALnJyl5/CABzStr325jrzgAS/wBzGr5+YACHx9Qf9iAAu6rvtbfbVvtJTJzAAVnfmF5uh2bql7gAFzj8RcbPlYABFyTf7rEts3W077OUACs/SM4AHtm++ft3/Ux/ePZ8PkABi7Wz77cR0v8AqAApBnAAyLs33O/fT8QAIt3OnZu+hr+KpTdu+gAE27odm6le4p//ABe34/MACLtrbZ9tttv1NrcnKAAfG5jd759u+n48wACVs++02z+IACL7KZP3pZ8PkAB0fv3s+HyJvFssn2WWWfQADW5xnN+Fa2137bbbfqAAlb87SUa2ffbmAA2yIU+PwgAHWyb7rMTGOdOYAD2+xlW09276AALurv3/AFF3U+/f9QACftHs+HyMr9bF7rLLPoABaYzFMHUABt+pjF2t2nZ229nyAAXdXfvq+J0PjQAD38Mtk+6wxuN/4Z+3fS3eABbrZPuszC5zcwAGqLZPusLT9p2fD5AAc9/T3bvoY5+oADpsWxk32WW/Ui5+0ADW+/Yoc9w1tvfbbb9eYAC7vffP276fiP1AAeXjWrPsttsw9xd/Sm7d9AAJv6U3bvoVf0vu3VN3AAZXbWs++2236mttN/2WbrPlYABN9+z96ird34hLLN1ku6wAC3xoRbT3bvoABlK2Cb7cJV21rd9tttXxAAvP4ibveidu/F3gAHWz5WYjG7qffvq+IAHTeLZY6dllln0F+tlkOyyyz6AAYutnys99pd5T3bvoABFjW2onbbbbh7yHa2ab7cbAAW5F5T3bqvgABcrdl29tvb8yna3YJb229vzAA0XAn0AAH//Z"); }',
  css += '.kMp3-table {border-collapse: collapse; border-spacing: 0; box-shadow: 0 0 3px 1px rgba(0,0,0,0.2); max-width: 520px; width: 90%; }',
  css += '.kMp3-table td, .kMp3-table th {border-top: 1px solid #DDD; line-height: 20px; padding: 8px; text-align: left; vertical-align: top; }',
  css += '.kMp3-table th {border-top: none; font-weight: bold; }',
  css += '.kMp3-table tbody > tr:nth-child(2n+1) > td, .kMp3-table tbody > tr:nth-child(2n+1) > th {background-color: #F9F9F9; }',
  css += '.kMp3-width {width: 45px; margin: 0 0 0 5px; display: inline-block; vertical-align: text-top;}',
  css += '.kMp3-padding {margin: 0 5px; display: inline-block;}',
  css += '@media screen and (max-width:1024px) { .kMp3-user-settings {position: fixed; left: 30px; right: 30px; top: 30px; bottom: 30px; } }',
  css += '.kMp3-notification {position: fixed; transition: all 0.3s ease-out; z-index: 100000; font-family: sans-serif; line-height: 40px; font-size: 35px; top: 25%; left: 25%; opacity: 1; width: 50%; min-height: 40px; text-align: center; background-color: #000; color: #fff; border-radius: 15px; text-shadow: 0 -1px 1px #ddd; box-shadow: 0 15px 15px -15px #000; }',
  css += '.kMp3_spinner { display: inline-block; width: 16px; height: 16px; vertical-align: text-top; background-image: url("data:image/gif;base64,R0lGODlhEAAQAPYAAO7TngAAAOrPm4h5Wn9wVN/FlLumfMqzhpSDYgAAAIV1WLmkey4pH0xEM93EkpuJZ4p6XOLJlnlrUBoXEaaTbpmIZpB/X+TKl+jOmp2LaMGrgD84KgsJB1lPO9C4itnAkLCcdCciGjIsIUE6K8awg7eieTgxJUlAMDozJkM7LMKsgb2nfVRKN6iVb9vCkWhdRaGOaqyYcq6ac1hOOlZMOVtRPH1vU9G6i3ZoTuzRnJeGZBYTDikkG1BHNQMDAkpCMb+pfjQuIlJJNhgVEODHlcixhZKBYdO7jNe/jzs1J5+NaSEdFh0aE6OQbGpeRkU9LjArIGNYQcSugrOfdyMfF3RnTT02KU5FNAkIBgcGBKSSbdW9jUc/L+bMmaqXcV9UP2FWQM62iJWEYxAOCx8cFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCAAAACwAAAAAEAAQAAAHaIAAgoMgIiYlg4kACxIaACEJCSiKggYMCRselwkpghGJBJEcFgsjJyoAGBmfggcNEx0flBiKDhQFlIoCCA+5lAORFb4AJIihCRbDxQAFChAXw9HSqb60iREZ1omqrIPdJCTe0SWI09GBACH5BAkIAAAALAAAAAAQABAAAAdrgACCgwc0NTeDiYozCQkvOTo9GTmDKy8aFy+NOBA7CTswgywJDTIuEjYFIY0JNYMtKTEFiRU8Pjwygy4ws4owPyCKwsMAJSTEgiQlgsbIAMrO0dKDGMTViREZ14kYGRGK38nHguHEJcvTyIEAIfkECQgAAAAsAAAAABAAEAAAB2iAAIKDAggPg4iJAAMJCRUAJRIqiRGCBI0WQEEJJkWDERkYAAUKEBc4Po1GiKKJHkJDNEeKig4URLS0ICImJZAkuQAhjSi/wQyNKcGDCyMnk8u5rYrTgqDVghgZlYjcACTA1sslvtHRgQAh+QQJCAAAACwAAAAAEAAQAAAHZ4AAgoOEhYaCJSWHgxGDJCQARAtOUoQRGRiFD0kJUYWZhUhKT1OLhR8wBaaFBzQ1NwAlkIszCQkvsbOHL7Y4q4IuEjaqq0ZQD5+GEEsJTDCMmIUhtgk1lo6QFUwJVDKLiYJNUd6/hoEAIfkECQgAAAAsAAAAABAAEAAAB2iAAIKDhIWGgiUlh4MRgyQkjIURGRiGGBmNhJWHm4uen4ICCA+IkIsDCQkVACWmhwSpFqAABQoQF6ALTkWFnYMrVlhWvIKTlSAiJiVVPqlGhJkhqShHV1lCW4cMqSkAR1ofiwsjJyqGgQAh+QQJCAAAACwAAAAAEAAQAAAHZ4AAgoOEhYaCJSWHgxGDJCSMhREZGIYYGY2ElYebi56fhyWQniSKAKKfpaCLFlAPhl0gXYNGEwkhGYREUywag1wJwSkHNDU3D0kJYIMZQwk8MjPBLx9eXwuETVEyAC/BOKsuEjYFhoEAIfkECQgAAAAsAAAAABAAEAAAB2eAAIKDhIWGgiUlh4MRgyQkjIURGRiGGBmNhJWHm4ueICImip6CIQkJKJ4kigynKaqKCyMnKqSEK05StgAGQRxPYZaENqccFgIID4KXmQBhXFkzDgOnFYLNgltaSAAEpxa7BQoQF4aBACH5BAkIAAAALAAAAAAQABAAAAdogACCg4SFggJiPUqCJSWGgkZjCUwZACQkgxGEXAmdT4UYGZqCGWQ+IjKGGIUwPzGPhAc0NTewhDOdL7Ykji+dOLuOLhI2BbaFETICx4MlQitdqoUsCQ2vhKGjglNfU0SWmILaj43M5oEAOwAAAAAAAAAAAA=="); }',
  css += '.grac-attack-cell-1 { width: 20px; text-align: center; overflow: hidden; white-space: nowrap;}',
  css += '.grac-attack-cell-2 { width: 91px; overflow: hidden; white-space: nowrap; }',
  css += '.grac-attack-cell-3 { width: 213px; overflow: hidden; white-space: nowrap; }',
  css += '.grac-attack-cell-4 { width: 253px; overflow: hidden; white-space: nowrap; }',
  css += '.grac-attack-cell-5 { width: 120px; overflow: hidden; white-space: nowrap; }',
  css += '.grac-attack-cell-6 { width: 80px; text-align: center; overflow: hidden; white-space: nowrap; }',
  css += '.grac-attack-age-div { display: block; width: 100%; height: 100%; }',
  css += '.grac-small-text { font-size: 90%; }',
  css += '.grac-smaller-text { font-size: 75%; }',
  css += '.grac-invisible-text { font-size: 0%; vertical-align: middle; }',
  css += '.grac-attacks-img { vertical-align: middle; }',
  css += '.grac-attacks-img-ia-box { width: 16px; height: 16px; vertical-align: middle; }';
  var draw = {
    helper: {
      colorValidation: function () {
        return '<span class="kMp3-color-validation"><span class="kMp3-icons kMp3-icon-valid"></span><span class="kMp3-icons kMp3-icon-invalid"></span></span>'
      },
      returnOptionsForObject: function (obj) {
        out = '';
        for (var i in obj) obj.hasOwnProperty(i) && (out += '<option value="' + i + '">' + obj[i] + '</option>');
        return out
      },
      returnUnitsForTrooplinks: function (no) {
        var troops = k.trooplinks[no],
        out = '';
        out += '<ul id="kMp3_trooplinks_' + no + '">',
        out += '<li><span class="kMp3-width">Name:</span><input type="text" id="kMp3_trooplinks_' + no + '_name"size="5" value="' + troops.name + '" max-length="7"></li>';
        for (var unit in unit_runtime) unit_runtime.hasOwnProperty(unit) && (out += '<li><span class="kMp3-width"><img src="/img/units/unit_' + unit + '.png"></span><input id="kMp3_trooplinks_' + no + '_' + unit + '" type="text" value="' + troops[unit] + '" size="5"></li>');
        return out += '</ul>'
      },
      getContrast: function (hexcolor) {
        var r = parseInt(hexcolor.substr(0, 2), 16),
        g = parseInt(hexcolor.substr(2, 2), 16),
        b = parseInt(hexcolor.substr(4, 2), 16),
        yiq = (299 * r + 587 * g + 114 * b) / 1000;
        return yiq >= 128 ? 'black' : 'white'
      },
      returnHighlightGroups: function (no) {
        var groups = [
        ],
        g = k.highlightgroups[no].group;
        if ('' != av) for (var i in g) g.hasOwnProperty(i) && groups.push(i);
         else premium ? ($('#group_drop_down > table > tbody > tr').each(function (i) {
          groups[i] = $(this).find('td > a').html()
        }), groups.shift())  : groups.push(l.none);
        for (var disabled = '' != av ? 'disabled' : '', out = '', i = 0; i < groups.length; i++) {
          var checked = g[groups[i]] ? 'checked="checked"' : '';
          out += '<li><p class="kMp3-switch"><label class="kMp3-enable' + (checked ? ' selected' : '') + '"><span>' + l.turnOn + '</span></label><label class="kMp3-disable' + (checked ? '' : ' selected') + '"><span>' + l.turnOff + '</span></label><input id="' + groups[i] + '" class="checkbox" type="checkbox" ' + checked + ' ' + disabled + ' ><span class="kMp3-width">' + groups[i] + '</span></li>'
        }
        return out
      }
    },
    trooplinks: function () {
      for (var number = [
        '0',
        'one',
        'two',
        'three'
      ], o = '', i = 1; 3 >= i; i++) o += '<div class="kMp3-paragraph" style="float: left; min-width: 170px; width: 25%;">',
      o += '<h2>kMp3 ' + l.troops + ' #' + i + '</h2><div class="kMp3_list">' + this.helper.returnUnitsForTrooplinks(number[i]) + '</div></div>';
      return o
    },
    highlightgroups: function (highlightgroups) {
      var o = '' != av ? '<h2 id="groups_av" style="color:red; text-align: center;">' + highlightGroupsReplacementError + '</h2>' : '',
      no = 1;
      for (var i in highlightgroups) highlightgroups.hasOwnProperty(i) && (o += '<div class="kMp3-paragraph" style="float: left; min-width: 250px; width: 25%">', o += '<h2>kMp3 ' + l.group + ' #' + no + '</h2><ul id="kMp3_highlightgroups_' + i + '_group"><li><span class="kMp3-width">' + l.name + ':</span><input id="kMp3_highlightgroups_' + i + '_name" size="5" maxlength="4" type="text" value="' + highlightgroups[i].name + '"></li>', o += '<li><span class="kMp3-width">' + l.color + ':</span><input class="kMp3_color" id="kMp3_highlightgroups_' + i + '_color" type="text" maxlength="7" size="9" value="' + highlightgroups[i].color + '"', o += 'style="text-transform: uppercase; background-color: ' + highlightgroups[i].color + '; color: ' + this.helper.getContrast(highlightgroups[i].color.substring(1)) + ';">' + this.helper.colorValidation() + '</li>', o += this.helper.returnHighlightGroups(i) + '</ul></div>', no++);
      return o
    },
    highlighttroops: function (unitsettings, units) {
      var o = '',
      unitlist = this.helper.returnOptionsForObject(units),
      amount = l.amount,
      color = l.color,
      none = l.none;
      for (var modul in unitsettings) if (unitsettings.hasOwnProperty(modul)) {
        var checked = unitsettings[modul] ? 'checked="checked"' : '',
        hidden = '',
        listOne = unitlist,
        listTwo = unitlist + '<option value="12">' + none + '</option>',
        hidden = '';
        [
          'spy',
          'count'
        ].indexOf(modul) > - 1 && (hidden = 'display: none;', listOne = '<option value=' + k.units[modul].one.unit + '></option>', listTwo = '<option value="12"></option>'),
        o += '<div class="kMp3-paragraph kMp3_troops" style="margin: 10px; float: left; width: 35%; min-width: 340px;"><h2>' + l[modul] + '</h2><p class="kMp3-switch"><label class="kMp3-enable' + (checked ? ' selected' : '') + '"><span>' + l.turnOn + '</span></label><label class="kMp3-disable' + (checked ? '' : ' selected') + '"><span>' + l.turnOff + '</span></label><input class="checkbox" type="checkbox" id="kMp3_units_modul_' + modul + '" ' + checked + '></p>',
        o += '<span style="vertical-align: sub;" class="kMp3-padding">' + l.abbr + ':</span><input style="width: 24px; text-align:center" type="text" id="kMp3_units_' + modul + '_abbr" size="1" maxlength="1" value="' + k.units[modul].abbr + '">',
        o += '<span class="kMp3-padding">' + color + ':</span><input class="kMp3_color" id="kMp3_units_' + modul + '_color" type="text" maxlength="7" size="9" value="' + k.units[modul].color + '" style="text-transform: uppercase; background-color: ' + k.units[modul].color + '; color: ' + this.helper.getContrast(k.units[modul].color.substring(1)) + ';">' + this.helper.colorValidation() + '<br />',
        o += '<span class="kMp3-padding">' + amount + ':</span><input id="kMp3_units_' + modul + '_one_amount" value="' + k.units[modul].one.amount + '" type="text" size="9" maxlength="5">',
        o += '<span class="kMp3-padding" style="' + hidden + '">' + l.unit + ' 1:</span><select id="kMp3_units_' + modul + '_one_unit" style="' + hidden + '"">' + listOne + '</select><br/>',
        o += '<span class="kMp3-padding" style="' + hidden + '">' + amount + ':</span><input id="kMp3_units_' + modul + '_two_amount" value="' + k.units[modul].two.amount + '" type="text" size="9" maxlength="5" style="' + hidden + '">',
        o += '<span class="kMp3-padding" style="' + hidden + '">' + l.unit + ' 2:</span><select id="kMp3_units_' + modul + '_two_unit" style="' + hidden + '">' + listTwo + '</select></div>'
      }
      return o
    },
    modul: function (settings, modul) {
      var o = '';
      for (var m in settings) if (settings.hasOwnProperty(m)) {
        var checked = modul[m] ? 'checked="checked"' : '';
        o += '<li class="kMp3-paragraph" style="margin: 5px 0;"><p class="kMp3-switch"><label class="kMp3-enable' + (checked ? ' selected' : '') + '"><span>' + l.turnOn + '</span></label><label class="kMp3-disable' + (checked ? '' : ' selected') + '"><span>' + l.turnOff + '</span></label><input id="kMp3_modul_' + [m] + '" class="checkbox" type="checkbox" ' + checked + '><span class="kMp3-padding">' + l.modul[m] + '</span></li>'
      }
      return o
    },
    returnMarketInputs: function (market) {
      var o = '',
      c = 1;
      for (var opt in market) market.hasOwnProperty(opt) && 'd3fault' != opt && (o += '<tr><td><span class="kMp3-padding">#' + c + '</span>', o += '<input id="kMp3_market_' + opt + '_name" value="' + market[opt].name + '" type="text" size="10" maxlength="10"></td><td>', o += '<input id="kMp3_market_' + opt + '_option" value="' + market[opt].option + '" type="text" size="10" maxlength="10" style="display: none;">', o += '<input id="kMp3_market_' + opt + '_stone" value="' + market[opt].stone + '" type="text" size="6" maxlength="6"></td><td>', o += '<input id="kMp3_market_' + opt + '_wood" value="' + market[opt].wood + '" type="text" size="6" maxlength="6"></td><td>', o += '<input id="kMp3_market_' + opt + '_iron" value="' + market[opt].iron + '" type="text" size="6" maxlength="6"></td></tr>', c++);
      return o
    },
    returnMarketDefault: function (market) {
      var o = '';
      for (var opt in market) market.hasOwnProperty(opt) && 'd3fault' != opt && (o += '<option value="' + opt + '">' + k.market[opt].name + '</option>');
      return o
    }
  };
  function getWorldUnitSpeed() {
    var world_unit_speed = $.kMp3('loadKey', 'grc_world_unit_speed');
    if (world_unit_speed)
    return world_unit_speed;
     else
    {
      $.ajax({
        type: 'post',
        async: false,
        url: '/help.php?m=worldinfo',
        success: function (data) {
          world_unit_speed = parseFloat($(data).find('table.borderlist').eq(0).find('tr:gt(1):lt(2) > td:nth-child(2)').html(), 10);
          $.kMp3('saveKey', 'grc_world_unit_speed', world_unit_speed)
        }
      })
    }
    return world_unit_speed;
  }
  function retrieveCoords(text) {
    return text.substring(text.indexOf('|') - 3, text.indexOf('|') + 4);
  }
  function retrieveCoordsAsList(text) {
    var coords = retrieveCoords(text),
    coords_split = coords.split('|');
    return [parseInt10(coords_split[0]),
    parseInt10(coords_split[1])];
  }
  function calculateDistance(source, target) {
    var distance = 0;
    if (source != null || target != null)
    {
      var coords_source = retrieveCoordsAsList(source),
      coords_target = retrieveCoordsAsList(target);
      distance = Math.sqrt(Math.pow(Math.abs(coords_source[0] - coords_target[0]), 2) + Math.pow(Math.abs(coords_source[1] - coords_target[1]), 2));
    }
    return Math.round(10000 * distance) / 10000
  }
  function calculateTravelTimeInSeconds(source, target, unit) {
    if (unit == unknown_unit) return null;
    return Math.round(calculateDistance(source, target) * (unit_runtime[unit] / getWorldUnitSpeed()) * 60);
  }
  function calculateReturnTimestamp(source, target, unit, arrival_timestamp) {
    var travel_time = calculateTravelTimeInSeconds(source, target, unit);
    if (travel_time == null) return null;
    return arrival_timestamp + travel_time * 1000;
  }
  function getTravelingUnit(source, target, time) {
    var i = - 1;
    while (i < Object.keys(units_speed_sorted).length) {
      i++;
      if (calculateTravelTimeInSeconds(source, target, units_speed_sorted[i]) >= time)
      break;
    }
    return units_speed_sorted[i];
  }
  function getMaxTravelingUnit(source, target, time) {
    var i = Object.keys(units_speed_sorted).length;
    while (i > 0) {
      i--;
      if (calculateTravelTimeInSeconds(source, target, units_speed_sorted[i]) <= time) {
        break;
      }
    }
    return units_speed_sorted[i];
  }
  function getMinTravelingUnit(source, target, time) {
    var i = Object.keys(units_speed_sorted).length;
    while (i > 0) {
      i--;
      if (calculateTravelTimeInSeconds(source, target, units_speed_sorted[i]) <= time) {
        i++;
        break;
      }
    }
    return units_speed_sorted[i];
  }
// function getServerTimeDiffInSeconds() {
//     var timestamp_client_perception = new Date(parseInt10($('#servertime').attr('time')) * 1000),
//     timestamp_server_perception = createDate($('#servertime').text().split(':'));
//     return new Date(timestamp_server_perception.getTime() - timestamp_client_perception.getTime() + new Date().getTimezoneOffset() * 1000).getHours() * 3600 * 1000;
//}
function getServerTimeDiffInSeconds() {
    const hrDeDiferenciasAlServidor = 0;
    return parseInt(hrDeDiferenciasAlServidor * 1000 * 3600)
}
  Number.prototype.toHHMMSS = function () {
    if (this < 1) return '00:00:00';
    var hours = Math.floor(this / 3600);
    var minutes = Math.floor((this - (hours * 3600)) / 60);
    var seconds = this - (hours * 3600) - (minutes * 60);
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return hours + ':' + minutes + ':' + seconds
  }
  function setToday() {
    var today = new Date();
    today.setHours(23);
    today.setMinutes(59);
    today.setSeconds(59);
    return today;
  }
  function setTomorrow() {
    tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(23);
    tomorrow.setMinutes(59);
    tomorrow.setSeconds(59);
    return tomorrow;
  }
  var today = setToday(),
  tomorrow = setTomorrow(),
  time_offset = getServerTimeDiffInSeconds(),
  server_timestamp = parseInt10($('#servertime').attr('time'));
  function accountForADayPassed() {
    var now = new Date().getDate();
    if (today.getDate() < now) {
      today = setToday();
      tomorrow = setTomorrow();
    }
  }
  function getFutureTimestamp(time_in_seconds, timestamp_now) {
    return timestamp_now * 1000 + time_in_seconds * 1000;
  }
  function printTimeUpToTimestamp(timestamp_to) {
    accountForADayPassed()
    var prefix = '',
    target_time = new Date(timestamp_to + time_offset);
    if (target_time.getTime() > tomorrow.getTime()) prefix = 'pojutrze ';
     else if (target_time.getTime() > today.getTime()) prefix = 'Hoy ';
    return prefix + 'a las ' + target_time.toTimeString().split(' ') [0]
  }
  function printTimeUp(time_in_seconds) {
    accountForADayPassed()
    var prefix = '',
    target_time = new Date(getFutureTimestamp(time_in_seconds, server_timestamp) + time_offset);
    if (target_time.getTime() > tomorrow.getTime()) prefix = 'pojutrze ';
     else if (target_time.getTime() > today.getTime()) prefix = ' ';
    return prefix + 'a las ' + target_time.toTimeString().split(' ') [0]
  }
  function printTimeDownToTimestamp(timestamp_to) {
    return (timestamp_to / 1000 - server_timestamp).toHHMMSS();
  }
  function printTimestamp(timestamp) {
    time = new Date(timestamp * 1000 + time_offset);
    return time.toTimeString().split(' ') [0]
  }
  function printTimeAbsolute(time) {
    return (new Date(time * 1000).toISOString().substr(11, 8));
  }
  var original_timestamp = server_timestamp;
  function timestampTimer() {
    var started = new Date().getTime();
    function update() {
      var now = new Date().getTime();
      var elapsed = Math.floor((now - started) / 1000);
      server_timestamp = original_timestamp + elapsed;
      $('span.count-up').each(function () {
        $(this).text(printTimeUp(parseInt10($(this).attr('time'))))
      });
      $('span.count-down').each(function () {
        $(this).text(printTimeDownToTimestamp(parseInt10($(this).attr('time'))))
      });
    }
    setInterval(update, 1000);
  }
  timestampTimer();
  $('div[id*="lay_castle_widget"] > ul > li').eq(1).append('<a class="widget_icon widget_icon_1" style="cursor: pointer;" id="kMp3_show_settings">kMp3</a>'),
  $('#kMp3_show_settings').bind('click', function () {
    putSettings('content_modules')
  });
  function updateLastServerTimestamp() {
    $.kMp3('saveKey', 'grac_last_server_timestamp', server_timestamp);
  }
  function getLastServerTimestamp() {
    var last_timestamp = parseInt10($.kMp3('loadKey', 'grac_last_server_timestamp'));
    if (!last_timestamp) return - 1;
     else if (last_timestamp - server_timestamp == 0) return - 1;
    return last_timestamp;
  }
  function getAttackPagesCount() {
    var attacks_number = $('td.lay_tower_right_top_attack').text();
    return Math.ceil(attacks_number / 50);
  }
  if (getAttackPagesCount() == 0) {
    updateLastServerTimestamp();
  }
  var presets = $.kMp3('presets'),
  k = presets;
  $.kMp3('isKey', 'kMp3_user_settings') ? updateSettings()  : (putSettings('content_modules'), $.kMp3('saveKey', 'kMp3_user_settings', k), $.kMp3('isKey', 'kMp3_version') || $.kMp3('saveKey', 'kMp3_version', '0'));
  function iterateSettings(presets, settings) {
    if (0 == Object.getOwnPropertyNames(presets).length) return settings;
    var new_settings = {
    };
    for (var i in presets) new_settings[i] = settings.hasOwnProperty(i) ? presets[i] instanceof Object && !(presets[i] instanceof Array) ? iterateSettings(presets[i], settings[i])  : settings[i] : presets[i];
    return new_settings
  }
  if (isNewerVersion($.kMp3('loadKey', 'kMp3_version'), version)) {
    var updated_settings = {
    };
    if ($.kMp3('isKey', 'kMp3_user_settings')) try {
      settings = $.kMp3('loadKey', 'kMp3_user_settings'),
      updated_settings = iterateSettings(presets, settings)
    } catch (e) {
      window.alert(l.adoptSettings),
      updated_settings = presets
    } else updated_settings = presets;
    $.kMp3('saveKey', 'kMp3_user_settings', updated_settings),
    updateSettings(),
    $.kMp3('saveKey', 'kMp3_version', version)
  }
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  !function (kMp3) {
    kMp3.module.attackplaner = {
    matcher: page.match('s=tools&m=attack_planer'),
    fn: function () {

        async function multiSendTroops2(url) {
      return new Promise(function(resolve,reject){
           $.ajax({
                      type: 'get',
                      async: true,
                      url: url,
                      timeout: 5000,
                      complete: function () {
                        resolve("done")
                      }
                    });
      })
  }

var session = $.kMp3('loadKey', 'grac_attack_session');

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        var hoy = new Date();
        var lagEnSegundos = 1;
        var contando =0;
      var attacks = [
      ];


        var idsPreviamenteGuardados = $.kMp3('loadKey', 'idsDeAtaquesPreviamenteGuardados');
        var arr=[];
        if (idsPreviamenteGuardados == null || idsPreviamenteGuardados == '') {
            idsPreviamenteGuardados='[{"id":"1","destino":"","orden":"","cantidad":""}]'
        }
        arr = JSON.parse(idsPreviamenteGuardados);
        const idsPrevios = Array.from(arr);
        var tipoDeOrden ='attack';
      function postHref(href, async) {
        $.ajax({
          type: 'POST',
          url: href,
          async: async
        })
      }
      $('input[id*="target_"]').focusin(function () {
        0 == $('#target_x, #target_y').val() && $('input[id*="target_"]').val('')
      })
      $('table[class*="borderlist"]').eq(4).find('tr').find('th').eq(6).css('text-align', 'center');
      $('table[class*="borderlist"]').eq(4).find('tr').find('th').eq(6).append('<span class="click" id="grac_planner_mass_delete"><img src="/img/ico_delete.png"></img></span>');
      $('table[class*="borderlist"]').eq(4).find('tr:not(:first)').each(function (index) {
        var children = $(this).children(),
        attack_href = children.eq(6).find('a').attr('href'),
        delete_href = children.eq(7).find('a').attr('href'),
        time = children.eq(5).find('span').attr('time'),
        serverTimeActual = document.getElementById('servertime').getAttribute('time'),
        timeToAttack = new Date(hoy.getTime() + (1000*time)),
        attackId = delete_href.split('id=')[1],
            desDelTrebu =recuperarDestinoDelTrebu(attackId).split(';'),
            segundoDeArranque= children.eq(3).text().substring(children.eq(3).text().lastIndexOf(':')+1,children.eq(3).text().lastIndexOf(':')+3);
        attacks.push([time,
        attack_href,
        delete_href, timeToAttack,attackId,desDelTrebu[0], desDelTrebu[1], desDelTrebu[2], (parseInt(serverTimeActual)+parseInt(time)),segundoDeArranque]);
        children.eq(5).find('span').attr('reload', 'false');
        //children.eq(0).find('td').text=desDelTrebu[0] //.find('td').value = desDelTrebu;
          if (attack_href.includes('kata')) {
              children.eq(2).find('a').last().prop('title', 'Tipo de orden: ' + desDelTrebu[1] + '>>>> Destino de los trebuches: ' + desDelTrebu[0]);
          } else {
              children.eq(2).find('a').last().prop('title', 'Tipo de orden: ' + desDelTrebu[1]);
          }
          if (desDelTrebu[1] == 'support') {
              children.eq(6).find('img').attr('src', children.eq(6).find('img').attr('src').replace('attack','support'));
          } else if (desDelTrebu[1] == 'spy') {
              children.eq(6).find('img').attr('src', '/img/units/unit_spy.png');
          }
          children.eq(6).find('a').before(desDelTrebu[2] + ' ' );
      })


        function recuperarDestinoDelTrebu(id) {
            for (let i in idsPrevios) {
                //alert(idsPrevios[i])
                if (idsPrevios[i]['id'] ==id) {
                    return idsPrevios[i]['destino'] + ';' + idsPrevios[i]['orden']+ ';' + idsPrevios[i]['cantidad'];
                }
            }
            var nuevoDestino =$.kMp3('loadKey', 'seleccionDelDestinoTrebuche');
            var nuevaOrden = $.kMp3('loadKey', 'seleccionDelTipoDeOrden');
            var nuevaCantidad = $.kMp3('loadKey', 'cantidadDeOrdenes');
            var nuevoID = { "id": id, "destino": nuevoDestino, "orden": nuevaOrden, "cantidad": nuevaCantidad};
            idsPrevios.push(nuevoID);
            localStorage.setItem('idsDeAtaquesPreviamenteGuardados', JSON.stringify(idsPrevios));
            return nuevoDestino + ';' + nuevaOrden + ';' + nuevaCantidad;
        }
var cachedTable = $('table.borderlist').eq(2);
       //cachedTable.append('<br><table class="bbb"><tbody><tr><th>Atacar edificio:</th><td><select name="kata_target" id="kata_target"><option value="main">Castillo</option><option value="stone">Cantera</option><option value="wood">Aserradero</option><option value="iron">Mina de mineral</option><option value="storage">Almacén</option><option value="farm">Molino</option><option value="barracks">Barracones</option><option value="wall">Muralla</option><option value="stable">Establo</option><option value="market">Mercado</option><option value="garage">Alquimista</option><option value="snob">Mansión</option><option value="smith">Tienda de Orfebrería</option><option value="statue">Monumento</option></select></td></tr></tbody></table>  <table class="ccc"><tbody><tr><th>Tipo de órden:</th><td><select name="tipo_orden" id="tipo_orden"><option value="attack">Atacar</option><option value="support">Apoyar</option></select></td></tr></tbody></table><br>')
        cachedTable.after('<br><table class="bbb"><tbody><tr><th>Atacar edificio:</th><td><select name="kata_target" id="kata_target"><option value="main">Castillo</option><option value="stone">Cantera</option><option value="wood">Aserradero</option><option value="iron">Mina de mineral</option><option value="storage">Almacén</option><option value="farm">Molino</option><option value="barracks">Barracones</option><option value="wall">Muralla</option><option value="stable">Establo</option><option value="market">Mercado</option><option value="garage">Alquimista</option><option value="snob">Mansión</option><option value="smith">Tienda de Orfebrería</option><option value="statue">Monumento</option></select></td><th>Tipo de órden:</th><td><select name="tipo_orden" id="tipo_orden"><option value="attack">Atacar</option><option value="support">Apoyar</option></select></td><th>Cantidad:</th><td><select name="cantidadDeOrdenes" id="cantidadDeOrdenes"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></td></tbody></table>')


        const selectElement = document.querySelector('#kata_target');
        selectElement.value=$.kMp3('loadKey', 'seleccionDelDestinoTrebuche');
        selectElement.addEventListener('change', (event) => {
            $.kMp3('saveKey', 'seleccionDelDestinoTrebuche', event.target.value);
        });

        const selectElement2 = document.querySelector('#tipo_orden');
        selectElement2.value=$.kMp3('loadKey', 'seleccionDelTipoDeOrden');
        selectElement2.addEventListener('change', (event) => {
            $.kMp3('saveKey', 'seleccionDelTipoDeOrden', event.target.value);
        });

        const selectElement3 = document.querySelector('#cantidadDeOrdenes');
        selectElement3.value=$.kMp3('loadKey', 'cantidadDeOrdenes');
        selectElement3.addEventListener('change', (event) => {
            $.kMp3('saveKey', 'cantidadDeOrdenes', event.target.value);
        });

        var encabezados = document.getElementsByClassName('borderlist')[3].getElementsByTagName('th');
        for(let i=0; i<encabezados.length; i++){
            encabezados[i].innerHTML=encabezados[i].innerHTML +'<br><span id="encabezado' + i +'"></span>';
        }
        var arrColonias=[];
            var coloniasGuardadas = $.kMp3('loadKey','coloniasParaApoyar');
            arrColonias = JSON.parse(coloniasGuardadas);
        const selectElement4 = document.querySelector('#ownlist');

        rellenarTropasEncontradas(document.getElementById('start_x').value+'|'+document.getElementById('start_y').value);
        async function rellenarTropasEncontradas(sCoordenadas){
            var coloniaActualSeleccionada = sCoordenadas;
            document.getElementById('encabezado0').innerText ='';
            document.getElementById('encabezado1').innerText ='';
            document.getElementById('encabezado2').innerText ='';
            document.getElementById('encabezado3').innerText ='';
            document.getElementById('encabezado4').innerText ='';
            document.getElementById('encabezado5').innerText ='';
            document.getElementById('encabezado6').innerText ='';
            document.getElementById('encabezado7').innerText ='';
            document.getElementById('encabezado8').innerText ='';
            document.getElementById('encabezado9').innerText ='';
            document.getElementById('encabezado10').innerText ='';
            for (let i=0; i<arrColonias.length; i++) {
                if (arrColonias[i].coordenadas == coloniaActualSeleccionada) {
                    $.ajax({
                        url: '/game.php?village='+ arrColonias[i].id,
                        type: 'POST',
                        success:  function (response) {
                            var infoDeLaColoniaActualizada = $($.parseHTML(response)).filter("#settlement").html(); // Imprimir respuesta del archivo
                            var infoDetalladaDeLaColonia = infoDeLaColoniaActualizada.split('|');
                            document.getElementById('encabezado0').innerText =infoDetalladaDeLaColonia[5];
                            document.getElementById('encabezado1').innerText =infoDetalladaDeLaColonia[6];
                            document.getElementById('encabezado2').innerText =infoDetalladaDeLaColonia[7];
                            document.getElementById('encabezado3').innerText =infoDetalladaDeLaColonia[8];
                            document.getElementById('encabezado4').innerText =infoDetalladaDeLaColonia[9];
                            document.getElementById('encabezado5').innerText =infoDetalladaDeLaColonia[10];
                            document.getElementById('encabezado6').innerText =infoDetalladaDeLaColonia[11];
                            document.getElementById('encabezado7').innerText =infoDetalladaDeLaColonia[12];
                            document.getElementById('encabezado8').innerText =infoDetalladaDeLaColonia[13];
                            document.getElementById('encabezado9').innerText =infoDetalladaDeLaColonia[14];
                            document.getElementById('encabezado10').innerText =infoDetalladaDeLaColonia[15];
                        },
                        error: function (error) {
                            console.log('Error- ' + error); // Imprimir respuesta de error
                        }
                    });
                    break;
                }
            }
        }
        selectElement4.addEventListener('change', (event) => {
            rellenarTropasEncontradas(event.target.value);
        });


        var iniciarEnAutomatico = true;
        if (iniciarEnAutomatico) {
            iniciarConLaEjecucion ();
        }

        async function iniciarConLaEjecucion () {
            for (let k = 0; k<attacks.length; k++) {
                    var fecha1 = new Date(attacks[k][3]);
                        //spanParaMensaje.textContent = 'Fecha del próximo ataque: ' + fecha1.toISOString() + ' (' + (k+1) + '/' + listaDeAtaques.length + ' órdenes)';
                console.log('Fecha del próximo ataque: ' + fecha1.toISOString() + ', timeStamp: ' + attacks[k][8]);
                    do {
                        var fecha2 = new Date();
                        var fecha3 = fecha1 - fecha2;
                        if (fecha2 > fecha1) {
                            break;
                        } else {
                            if (fecha3 <= ((lagEnSegundos*1000)+3000)) {
                                var url = attacks[k][1].replaceAll('command','command&a=sendTroop&p='+ session);
                                var parte1 = url.substring(0,10+url.indexOf('send_y'));
                                var parte2 = url.substring(10+url.indexOf('send_y'),url.length);
                                url = '/' + parte1 + '&' + attacks[k][6] + '=1' + parte2;

                                if (url.includes('kata')) {
                                    if (attacks[k][5]==null || attacks[k][5]=='') {
                                        url = url + '&kata_target=statue';
                                    } else {
                                        url = url + '&kata_target=' + attacks[k][5];
                                    }
                                }
                                var numeroDeRepeticiones = 0;
                                numeroDeRepeticiones=parseInt(attacks[k][7]);
                                if (isNaN(numeroDeRepeticiones)) {
                                    numeroDeRepeticiones=1;
                                    }
                                //Esperamos a que cambie el servertime
                                for (let xContando = 0; xContando<80; xContando++) {
                                    var segundoDeLaHoraDelServidor = parseInt(document.getElementById('servertime').textContent.split(':')[2]);
                                    var segundoExactoParaSalir = (parseInt(attacks[k][9])-parseInt(lagEnSegundos)<0 ? 60-parseInt(lagEnSegundos) : parseInt(attacks[k][9])-parseInt(lagEnSegundos));
                                    if (segundoExactoParaSalir==segundoDeLaHoraDelServidor) {
                                        //console.log('Después: Seg exacto para salir: ' + segundoExactoParaSalir + '--- Seg del servidor' + segundoDeLaHoraDelServidor);
                                        break;
                                        }
                                    await sleep(100);
                                }
                                //console.log('# Órdenes: ' + numeroDeRepeticiones + ', URL: '  + url);
                                for (let kk=0; kk<numeroDeRepeticiones; kk++) {
                                    multiSendTroops2(url).then(function () {
                                        //console.log('Listo...')
                                    }).catch(function () {
                                        console.log('Error...')
                                    })
                                    //await sleep(10) //Tiempo de espera en milisegundos entre cada ataque
                                }
                                 contando=1;
                                break;
                            } else {
                                contando=contando+1;
                             if (fecha3>30000 && contando> 30) {
                                 location.reload();
                                 await sleep(550)
                                 return;
                             }
                            }
                        }
                        await sleep(1010)

                    } while (true);
            }
            $.kMp3('saveKey', 'idsDeAtaquesPreviamenteGuardados','');
            console.log('Terminado');
        }


      $('#grac_planner_mass_delete').click(function () {
        var deletable = [
        ]
        for (var i = 0; i < attacks.length; i++) {
          if (attacks[i][0] < 1) deletable.push(attacks[i][2]);
        }
        for (var i = 0; i < deletable.length; i++) {
          $('#grac_planner_mass_delete').replaceWith('<span id="grac_planner_mass_delete"><img src="' + spinner_img_src + '"></span>');
          var finished = 0;
          $.ajax({
            type: 'POST',
            url: deletable[i],
            async: true,
            timeout: 10000,
            complete: function () {
              finished++;
              if (finished == deletable.length) location.reload()
            }
          })
        }
      });
    }
  }
  }(kMp3);
  function getAllOwnedVillages() {
    if (premium) return retrieveCoords
    var village_coords_list = [
    ];
    if (!premium) return [retrieveCoords($('div.villageName > b').text())];
    villages = $('#village_drop_down').find('a');
    for (var i = 0; i < villages.length; i++) {
      village_coords_list.push(retrieveCoords(villages[i].innerText));
    }
    return village_coords_list;
  }
  var own_villages = getAllOwnedVillages(),
  unknown_unit = 'unknown',
  spinner_img_src = 'data:image/gif;base64,R0lGODlhEAAQAPYAAO7TngAAAOrPm4h5Wn9wVN/FlLumfMqzhpSDYgAAAIV1WLmkey4pH0xEM93EkpuJZ4p6XOLJlnlrUBoXEaaTbpmIZpB/X+TKl+jOmp2LaMGrgD84KgsJB1lPO9C4itnAkLCcdCciGjIsIUE6K8awg7eieTgxJUlAMDozJkM7LMKsgb2nfVRKN6iVb9vCkWhdRaGOaqyYcq6ac1hOOlZMOVtRPH1vU9G6i3ZoTuzRnJeGZBYTDikkG1BHNQMDAkpCMb+pfjQuIlJJNhgVEODHlcixhZKBYdO7jNe/jzs1J5+NaSEdFh0aE6OQbGpeRkU9LjArIGNYQcSugrOfdyMfF3RnTT02KU5FNAkIBgcGBKSSbdW9jUc/L+bMmaqXcV9UP2FWQM62iJWEYxAOCx8cFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCAAAACwAAAAAEAAQAAAHaIAAgoMgIiYlg4kACxIaACEJCSiKggYMCRselwkpghGJBJEcFgsjJyoAGBmfggcNEx0flBiKDhQFlIoCCA+5lAORFb4AJIihCRbDxQAFChAXw9HSqb60iREZ1omqrIPdJCTe0SWI09GBACH5BAkIAAAALAAAAAAQABAAAAdrgACCgwc0NTeDiYozCQkvOTo9GTmDKy8aFy+NOBA7CTswgywJDTIuEjYFIY0JNYMtKTEFiRU8Pjwygy4ws4owPyCKwsMAJSTEgiQlgsbIAMrO0dKDGMTViREZ14kYGRGK38nHguHEJcvTyIEAIfkECQgAAAAsAAAAABAAEAAAB2iAAIKDAggPg4iJAAMJCRUAJRIqiRGCBI0WQEEJJkWDERkYAAUKEBc4Po1GiKKJHkJDNEeKig4URLS0ICImJZAkuQAhjSi/wQyNKcGDCyMnk8u5rYrTgqDVghgZlYjcACTA1sslvtHRgQAh+QQJCAAAACwAAAAAEAAQAAAHZ4AAgoOEhYaCJSWHgxGDJCQARAtOUoQRGRiFD0kJUYWZhUhKT1OLhR8wBaaFBzQ1NwAlkIszCQkvsbOHL7Y4q4IuEjaqq0ZQD5+GEEsJTDCMmIUhtgk1lo6QFUwJVDKLiYJNUd6/hoEAIfkECQgAAAAsAAAAABAAEAAAB2iAAIKDhIWGgiUlh4MRgyQkjIURGRiGGBmNhJWHm4uen4ICCA+IkIsDCQkVACWmhwSpFqAABQoQF6ALTkWFnYMrVlhWvIKTlSAiJiVVPqlGhJkhqShHV1lCW4cMqSkAR1ofiwsjJyqGgQAh+QQJCAAAACwAAAAAEAAQAAAHZ4AAgoOEhYaCJSWHgxGDJCSMhREZGIYYGY2ElYebi56fhyWQniSKAKKfpaCLFlAPhl0gXYNGEwkhGYREUywag1wJwSkHNDU3D0kJYIMZQwk8MjPBLx9eXwuETVEyAC/BOKsuEjYFhoEAIfkECQgAAAAsAAAAABAAEAAAB2eAAIKDhIWGgiUlh4MRgyQkjIURGRiGGBmNhJWHm4ueICImip6CIQkJKJ4kigynKaqKCyMnKqSEK05StgAGQRxPYZaENqccFgIID4KXmQBhXFkzDgOnFYLNgltaSAAEpxa7BQoQF4aBACH5BAkIAAAALAAAAAAQABAAAAdogACCg4SFggJiPUqCJSWGgkZjCUwZACQkgxGEXAmdT4UYGZqCGWQ+IjKGGIUwPzGPhAc0NTewhDOdL7Ykji+dOLuOLhI2BbaFETICx4MlQitdqoUsCQ2vhKGjglNfU0SWmILaj43M5oEAOwAAAAAAAAAAAA==',
  loca_attack_descriptions = [
    'Saldiri',
    'Atak',
    'Attack',
    'Attacco'
  ]
  function isAttackSigned(description) {
    var descr = description.trim();
    if (loca_attack_descriptions.indexOf(descr) < 0) {
      return true;
    }
    return false;
  }
  function getAttackDetails(attack_row_children, server_timestamp) {
    var atacanteInfo =attack_row_children.eq(2).html();
    var defensorInfo =attack_row_children.eq(1).html();
    var time = attack_row_children.eq(4).find('span').attr('time');
    var arrival_timestamp = getFutureTimestamp(time, server_timestamp);
    var target = attack_row_children.eq(1).find('a:last').html();
    var target_href = attack_row_children.eq(1).find('a').eq(1).attr('href');
    var source = attack_row_children.eq(2).find('a:last').html();
    var source_href = attack_row_children.eq(2).find('a:last').attr('href');
    var description = attack_row_children.eq(0).text();
    var defender = attack_row_children.eq(1).find('a:first').html();
    var defender_href = attack_row_children.eq(1).find('a:first').attr('href');
    var attacker = attack_row_children.eq(2).find('a:first').html();
    var attacker_href = attack_row_children.eq(2).find('a:first').attr('href');
    var has_alliance;
    var attacking_alliance;
    var attacking_alliance_href;
    var attacking_alliance_id;
    if (premium) {
      has_alliance = attack_row_children.eq(2).find('a').length > 3 ? true : false;
    }
    else {
      has_alliance = attack_row_children.eq(2).find('a').length > 2 ? true : false;
    }
    if (has_alliance) {
      var attacking_alliance = attack_row_children.eq(2).find('a').eq(1).html().slice(1, - 1);
      var attacking_alliance_href = attack_row_children.eq(2).find('a').eq(1).attr('href');
      var attacking_alliance_id = attacking_alliance_href.substring(attacking_alliance_href.indexOf('&id=') + 4);
    }
    var traveling_unit = getTravelingUnit(source, target, time);
    var signed = isAttackSigned(description);
    var is_attack = attack_row_children.eq(0).find('img:first').attr('src').indexOf('support.png') < 0 ? true : false;
    if (!premium) {
      source = source.substring(source.indexOf('|') - 3, source.indexOf('|') + 4);
      target = target.substring(target.indexOf('|') - 3, target.indexOf('|') + 4);
    }
    return {
      source: source,
      target: target,
      source_href: source_href,
      target_href: target_href,
      description: description,
      time: time,
      count: 1,
      posted: false,
      arrival_timestamp: arrival_timestamp,
      defender: defender,
      attacker: attacker,
      attacking_alliance: attacking_alliance,
      signed: signed,
      has_alliance: has_alliance,
      is_attack: is_attack,
      unit: traveling_unit,
      spotted_unit: null,
      defender_href: defender_href,
      attacker_href: attacker_href,
      attacking_alliance_id: attacking_alliance_id,
      attacking_alliance_href: attacking_alliance_href,
      atacanteInfo: atacanteInfo,
      defensorInfo: defensorInfo
    };
  }
  function createRuntimeCalculatorHref(source, target, time_left) {
    return '/game.php?&s=tools&m=runtime_calculator&target=' + target + '&source=' + source + '&time=' + time_left + '&starttime=' + server_timestamp * 1000;
  }
  !function (kMp3) {
    kMp3.module.attacks = {
      matcher: page.match('m=attacks'),
      fn: function () {
        var mp3src = 'data:audio/mpeg;base64,SUQzAwAAAAATBVRSQ0sAAAADAAAAMTJUSVQyAAAACgAAAEZhbmZhcmUgMlRQRTEAAAAPAAAAQ2hyb25vIFRyaWdnZXJUQUxCAAAAFwAAAENocm9ubyBUcmlnZ2VyIE9TViBDRDJUQ09OAAAABQAAAEdhbWVUWUVSAAAABQAAADE5OTVUQ09OAAAABQAAAEdhbWVUWUVSAAAABQAAADE5OTVUQUxCAAAAFwAAAENocm9ubyBUcmlnZ2VyIE9TViBDRDJUUEUxAAAAHwAAAFlhc3Vub3JpIE1pdHN1ZGEsIE5vcmlrbyBNYXRzdVRJVDIAAAAKAAAARmFuZmFyZSAyVFJDSwAAAAMAAAAxMlRTSVoAAAAHAAAAMTA0NTM5Q09NTQAAAGgAAABlbmdpVHVuTk9STQAgMDAwMDBGNTQgMDAwMDA4RTkgMDAwMDQ2QkYgMDAwMDI1RTIgMDAwMDA4RTUgMDAwMDBBM0UgMDAwMDgwMDAgMDAwMDZFMEUgMDAwMDA0QUMgMDAwMDA4RTUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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';
        var incoming_attacks = [
        ];
        var displayed_attacks = {
        };
        var color_memory = {
        };
        var attack_coords_memory = {
        };
        var defend_coords_memory = {
        };
        var forum_id;
        var watchdog = false;
        var history_attacks = loadAttacksHistory();
        var refresh_interval = 60000;
        var filters = {
          alliance: false,
          text: '',
          attacker: false,
          defender: false,
          slowest_history: false,
          slowest_current: false
        };
        var own_alliance_id;
        if (premium) {
          var own_alliance_id = $('.contentpane').eq(1).find('a').eq(7).attr('href');
          var own_alliance_id = own_alliance_id.substring(own_alliance_id.indexOf('&id=') + 4);
        }
        function hideRealAttacksTable() {
          $('table.borderlist').eq(2).hide();
          $('span.countdown').each(function () {
            $(this).attr('reload', 'false');
            $(this).removeClass('countdown');
          });
        }
        function loadAttacksDetails(data) {
          var attacks_table = $(data).find('table.borderlist').eq(2);
          var server_timestamp = $(data).find('#servertime').attr('time');
          attacks_table.find('tr').each(function () {
            var cur = $(this);
            if (cur.find('td[class*="list"]').length > 0) {
              loadAttackDetails(cur.children(), server_timestamp);
            }
          })
        }
        function memoizeCoords(coords, type) {
          var memory = type == 'attack' ? attack_coords_memory : defend_coords_memory;
          if (!(coords in memory)) memory[coords] = 1;
           else memory[coords] += 1;
          return memory[coords];
        }
        function getCoordsMemory(coords, type) {
          var memory = type == 'attack' ? attack_coords_memory : defend_coords_memory;
          if (!(coords in memory)) return 0;
          return memory[coords];
        }
        function loadAttackDetails(children, server_timestamp) {
          var attack_details = getAttackDetails(children, server_timestamp);
          var attack_history = getAttackFromHistory(attack_details);
          if (attack_history == null) {
            var history_details = pushAttackToHistory(attack_details);
            attack_details['spotted_unit'] = history_details['spotted_unit'];
            attack_details['spotted_timestamp'] = history_details['spotted_timestamp'];
            attack_details['last_server_timestamp'] = history_details['last_server_timestamp'];
            attack_details['time_left'] = history_details['time_left'];
            attack_details['ignored'] = history_details['ignored'];
            attack_details['sent_timestamp'] = history_details['sent_timestamp'];
            attack_details['return_timestamp'] = history_details['return_timestamp'];
          }
          else {
            attack_details['spotted_unit'] = attack_history['spotted_unit'];
            attack_details['spotted_timestamp'] = attack_history['spotted_timestamp'];
            attack_details['last_server_timestamp'] = attack_history['last_server_timestamp'];
            attack_details['time_left'] = attack_history['time_left'];
            attack_details['ignored'] = attack_history['ignored'];
            attack_details['posted'] = attack_history['posted'];
            attack_details['sent_timestamp'] = attack_history['sent_timestamp'];
            attack_details['return_timestamp'] = attack_history['return_timestamp'];
          }
          pushToWatchdog(attack_details);
          incoming_attacks.push(attack_details);
        }
        function pushToWatchdog(attack_details) {
          if (watchdog != true) return;
          var traveling_index = units_speed_sorted_reverse[attack_details['unit']];
          if (traveling_index < 0) return;
          //if (premium && attack_details['attacking_alliance_id'] == own_alliance_id) return;
          var watchdog_attacks = loadWatchdogAttacks();
          for (var i = 0; i < watchdog_attacks.length; i++) {
            var details = watchdog_attacks[i];
            if (isAttackEqual(attack_details, details) == true) {
              if (details['posted'] == true) return;
            }
          }
          watchdog_attacks.push(attack_details);
          saveWatchdogAttacks(watchdog_attacks);
        }
        function loadWatchdogAttacks() {
          var watchdog_arr = [
          ];
          if ($.kMp3('isKey', 'grac_watchdog_attacks')) { //need to do this for compatibility reasons.
            var watchdog_dict = $.kMp3('loadKey', 'grac_watchdog_attacks');
            for (var i = 0; i < watchdog_dict.length; i++) {
              watchdog_arr.push(watchdog_dict[i]);
            }
          }
          return watchdog_arr;
        }
        function saveWatchdogAttacks(watchdog_array) {
          var watchdog_dict = {
          };
          watchdog_dict.length = 0;
          for (var i = 0; i < watchdog_array.length; i++) {
            watchdog_dict[watchdog_dict.length] = watchdog_array[i];
            watchdog_dict.length = watchdog_dict.length + 1;
          }
          $.kMp3('saveKey', 'grac_watchdog_attacks', watchdog_dict);
        }
        function removeWatchdogDuplicates() {
          var watchdog_attacks = loadWatchdogAttacks();
          var max_iters = Math.min(watchdog_attacks.length, 500)
          var watchdogs_tmp_array = [
          ];
          for (var i = 0; i < max_iters; i++) watchdog_attacks[i] && watchdog_attacks[i]['arrival_timestamp'] > server_timestamp * 1000 && watchdog_attacks[i]['posted'] == true && watchdogs_tmp_array.push(watchdog_attacks[i])
          saveWatchdogAttacks(watchdogs_tmp_array);
        }
        function isAttackEqual(a, b) {
          var ret = false;
          if (a['source'] == b['source'] && a['target'] == b['target'] && a['arrival_timestamp'] == b['arrival_timestamp'] && a['spotted_unit'] == b['spotted_unit']) ret = true;
          return ret;
        }
        function loadAlarmOptions(id) {
          var alarm_option = $.kMp3('loadKey', id);
          if (alarm_option) $(id).val(alarm_option);
          $(id).change(function () {
            $.kMp3('saveKey', id, $(id).val());
          });
        }
        function loadAlarmSettings(id) {
          if ($.kMp3('loadKey', id) == true) $(id).attr('checked', true);
          $(document).on('change', id, function () {
            if (!this.checked) $('#grac_alarm_player') [0].pause();
            $.kMp3('saveKey', id, this.checked);
          });
        }
        function loadWatchdogOptions() {
          if ($.kMp3('loadKey', 'grac_attacks_watchdog') == true) {
            $('#grac_attacks_watchdog').attr('checked', true);
            watchdog = true;
          }
          $(document).on('change', '#grac_attacks_watchdog', function () {
            $.kMp3('saveKey', 'grac_attacks_watchdog', this.checked);
            watchdog = this.checked;
          });
          if ($.kMp3('isKey', 'grac_attacks_watchdog_forum_id')) {
            forum_id = $.kMp3('loadKey', 'grac_attacks_watchdog_forum_id');
            $('#grac_attacks_watchdog_forum_id').val(forum_id);
          }
          else forum_id = null;
          $('#grac_attacks_watchdog_forum_id').on('input', function () {
            forum_id = $('#grac_attacks_watchdog_forum_id').val();
            $.kMp3('saveKey', 'grac_attacks_watchdog_forum_id', $('#grac_attacks_watchdog_forum_id').val());
          });
        }
        function loadFilterOptions() {
          if ($.kMp3('loadKey', 'grac_attacks_filter_alliance') && premium) {
            filters['alliance'] = true;
            $('#grac_attacks_filter_alliance').attr('checked', true);
          }
          $('#grac_attacks_filter_text').on('input', function () {
            filters['text'] = this.value.toLowerCase();
            applyFilters();
          });
          $('#grac_attacks_filter_defender').click(function () {
            if (this.checked) {
              if (filters['defender']) {
                filters['defender'] = false;
                $('#grac_attacks_filter_defender').attr('checked', false);
              }
              else filters['defender'] = true;
              filters['attacker'] = false;
            }
            applyFilters();
          });
          $('#grac_attacks_filter_attacker').click(function () {
            if (this.checked) {
              if (filters['attacker']) {
                filters['attacker'] = false;
                $('#grac_attacks_filter_attacker').attr('checked', false);
              }
              else filters['attacker'] = true;
              filters['defender'] = false;
            }
            applyFilters();
          });
          $('#grac_attacks_filter_alliance').click(function () {
            if (this.checked) filters['alliance'] = true;
             else filters['alliance'] = false;
            $.kMp3('saveKey', 'grac_attacks_filter_alliance', this.checked);
            applyFilters();
          });
        }
        function applyFilters() {
          var trs = $('tr[name="grac_attacks_row"]');
          for (var i = 0; i < Object.keys(displayed_attacks).length; i++) {
            var hide_attack = applyFilter(displayed_attacks[i]);
            if (hide_attack) trs.eq(i).hide();
             else trs.eq(i).show();
          }
          updateDisplayedAttacksCount();
        }
        function getForumNewThreadSession() {
          if (forum_id == 73) return null;
          var current_ses = getCurrentKaSession(document);
          var last_ses = $.kMp3('loadKey', 'grac_forum_ka_session');
          if (current_ses == last_ses) return $.kMp3('loadKey', 'grac_forum_session');
          var session = null;
          $.ajax({
            type: 'get',
            async: false,
            url: '/forum.php?s=forum_board&m=new_thread&forum_id=' + forum_id + av,
            success: function (data) {
              var action = $(data).find('form:first').attr('action');
              if (action) {
                if (action.indexOf('&p=') > 0) {
                  session = action.substring(action.indexOf('&p=') + 3, action.indexOf('&p=') + 7);
                  $.kMp3('saveKey', 'grac_forum_session', session);
                  $.kMp3('saveKey', 'grac_forum_ka_session', current_ses);
                }
              }
            }
          });
          return session
        }
        function postAttacksOnForum(details_arr) {
          var session = getForumNewThreadSession();
          if (!session) return;
          var url = '/forum.php?s=forum_board&m=new_thread&forum_id=' + forum_id + '&a=forumNewThread&p=' + session;
          var defender = details_arr[0]['defender'];
          var target = details_arr[0]['target'];
          var highest_unit = unknown_unit;
          var arrival = printTimeUpToTimestamp(details_arr[0]['arrival_timestamp']);
          var bb_codes = '';
          var ally_same = '';
          if (premium && details_arr[0]['attacking_alliance_id'] == own_alliance_id) ally_same = ' [soj]';
          for (var i = 0; i < details_arr.length; i++) {
            var details = details_arr[i];
            if (details['spotted_unit'] != unknown_unit) {
              var unit = units_speed_sorted_reverse[details['spotted_unit']];
              if (highest_unit == unknown_unit || unit > units_speed_sorted_reverse[highest_unit]) highest_unit = units_speed_sorted[unit];
            }
            bb_codes += getBBCodeFromAttack(details) + '\n';
          }
          var unit_pl = highest_unit == unknown_unit ? '?' : units_short_es[highest_unit];
          var title = defender + ' ' + unit_pl + ' ' + arrival + ally_same
          var body = {
            title: title.substring(0, 50),
            text: bb_codes.substring(0, 5999)
          };
          var safety_count = 0;
          var post = function () {
            $.ajax({
              type: 'post',
              url: url,
              data: body,
              success: function (data) {
                var really_worked = $(data).find('div.breadcrumb').length;
                if (really_worked < 1 && safety_count < 10) {
                  safety_count++;
                  post();
                }
              }
            })
          }();
        }
        function applyFilter(displayed_attack) {
          displayed_attack['filter'] = false;
          if (filters['alliance']) {
            if (displayed_attack['attacking_alliance_id'] == own_alliance_id) displayed_attack['filter'] = true;
          }
          if (filters['text'].length > 0) {
            if (filters['defender']) if (displayed_attack['defender'].toLowerCase().indexOf(filters['text']) < 0 && displayed_attack['target'].indexOf(filters['text']) < 0) displayed_attack['filter'] = true;
            if (filters['attacker']) if (displayed_attack['attacker'].toLowerCase().indexOf(filters['text']) < 0 && displayed_attack['source'].indexOf(filters['text']) < 0) displayed_attack['filter'] = true;
          }
          return displayed_attack['filter'];
        }
        function createAttackTableWithFilters() {
          $('body').append('<div id="kMp3_box" style="width: 800px; position: fixed; left:38%; width: 930px;"><textarea style="width: 99%; resize: none; display: block;" id="grac_bb_codes_textarea"></textarea></div><div id="kMp3_overlay" class="kMp3-backlight"></div>');
          $('body').append('<div id="grac_attacks_alarm_box" style="position: fixed; display: none; top: 5px; left: 5px; width: 400px; padding: 3px; background-color: white; opacity: 0.9; font-size: 80%; box-shadow: 3px 7px 7px #000000;"><div style="float: left;">Ataques Entrantes! (copy with bb-codes)</div><div style="float: right;" id="grac_attacks_alarm_box_close" class="click">Close</div><br><br><span id="grac_attacks_alarm_box_content"></span></div>');
          $('#grac_attacks_alarm_box_close').click(function () {
            $('#grac_attacks_alarm_box').hide();
          });
          $('body').append('<div id="grac_history_attacks_box" style="position: fixed; display: none; top: 5px; right: 5px; width: 350px; padding: 3px; background-color: white; opacity: 0.9; font-size: 80%; box-shadow: 3px 7px 7px #000000;"><span id="grac_history_attacks_box_content"></span></div>');
          $('body').append('<audio id="grac_alarm_player" preload="Ninguno" loop><source id="mp3source" src="' + mp3src + '" type="audio/mpeg"></audio>');
          $('table.borderlist').eq(2).after('<table id="grac_attacks_header_table" class="borderlist" style="width: 820px;"></table><table id="grac_attacks_table" class="borderlist" style="width: 820px; table-layout: fixed;"></table><table id="grac_attacks_footer_table" class="borderlist" style="width: 820px; table-layout: fixed; height: 21px;"></table><br><div style="vertical-align: middle; display: inline-block; background: rgba(0, 255, 0, 0.2); border: 1px solid black; width: 20px; height: 16px;"></div> + de 1 Hr en  bandera&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div style="vertical-align: middle; display: inline-block; background: rgba(255, 255, 0, 0.6); border: 1px solid black; width: 20px; height: 16px;"></div> + de 30 min en bandera &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div style="vertical-align: middle; display: inline-block; background: rgba(255, 99, 0, 0.9); border: 1px solid black; width: 20px; height: 16px;"></div> + de 15 min en bandera');
          var header_table = $('#grac_attacks_header_table'),
          footer_table = $('#grac_attacks_footer_table')
          var watchdog_row = '<tr>';
          watchdog_row += '<td colspan="7"><span style="float:right">Watchdog<input type="checkbox" id="grac_attacks_watchdog">&nbsp;&nbsp;Forum id: <input type="text" id="grac_attacks_watchdog_forum_id" style="width: 45px;"></span></td>';
          watchdog_row += '</tr>';
          if (self == 'Malpa') header_table.append(watchdog_row)
          var filters_header_row = '<tr>';
          filters_header_row += '<th colspan="2" style="text-align: center;">Ataques</th>';
          filters_header_row += '<th colspan="2" style="text-align: center;">Filtro</th>';
          filters_header_row += '<th colspan="3" style="text-align: center;">Alarma <input type="checkbox" id="grac_attacks_alarm_checkbox"></th>';
          filters_header_row += '</tr>';
          header_table.append(filters_header_row);
          var filter_alliance = premium ? '<div style="padding-left: 30px;">Atk Aliado<input type="checkbox" id="grac_attacks_filter_alliance"></div>' : '';
          var alarm_options = '<option value="None">None</option>';
          for (var i = 0; i < Object.keys(units).length; i++) alarm_options += '<option value="' + units_raw[Object.keys(units_raw) [i]] + '">' + units[Object.keys(units) [i]] + '</option>';
          var filter_row = '<tr style="height: 55px;">';
          filter_row += '<td colspan="2" style="height: 55px; text-align: center;"><span id="grac_attacks_count" style="font-size: 175%;">0</span></td>';
          filter_row += '<td colspan="2" style="height: 55px;"><div style="display: flex; align-items: center; padding-left: 10px;">Coordenadas:&nbsp;<input style="width: 120px;" type="text" id="grac_attacks_filter_text"><div style="padding-left: 5px;"><input type="radio" id="grac_attacks_filter_attacker" name="grac_attacks_filter_radio_group">' + l.attacker + '<br><input type="radio" id="grac_attacks_filter_defender" name="grac_attacks_filter_radio_group">' + l.defender + '</div>' + filter_alliance + '</td>';
          filter_row += '<td colspan="3" style="height: 55px; text-align: right; padding-right: 5px; line-height: 24px;"><div style="font-size: 75%;">Propio Lento:<select id="grac_attacks_alarm_own" style="width: 120px;">' + alarm_options + '</select><br>General Lento:<select id="grac_attacks_alarm_anyone" style="width: 120px;">' + alarm_options + '</select></div></td>';
          filter_row += '</tr>';
          header_table.append(filter_row);
          var header_row = '<tr>';
          header_row += '<th class="grac-attack-cell-1"><input type="checkbox" id="grac_attacks_mother_checkbox"></th>';
          header_row += '<th class="grac-attack-cell-2">Orden</th>';
          header_row += '<th class="grac-attack-cell-3">Objetivo</th>';
          header_row += '<th class="grac-attack-cell-4">Origen</th>';
          header_row += '<th class="grac-attack-cell-5">Hora de llegada</th>';
          header_row += '<th class="grac-attack-cell-6" style="text-align: left;">Tiempo restante</th>';
          header_row += '</tr>';
          header_table.append(header_row);
          var footer_row = '<tr>';
          footer_row += '<th style="height: 21px; width: 20px;"></th>'
          footer_row += '<th style="height: 21px;"><span id="grac_attacks_ignore" class="click kMp3_mark">Ignorar</span> &nbsp;&nbsp;|&nbsp;&nbsp; <span id="grac_attacks_bb_code" class="click kMp3_mark">BB-Code</span> &nbsp;&nbsp;|&nbsp;&nbsp; <span id="grac_attacks_kMp3_map" class="click kMp3_mark">Guardar Minimapa</span> [<span id="grac_attacks_clear_kMp3_map" style="font-weight: normal;">Limpiar</span>]<span style="float: right; color: green; display: none;" id="grac_attacks_done">OK, IT\'S DONE!</span></th>'
          footer_row += '</tr>';
          footer_table.append(footer_row);
          loadAlarmOptions('#grac_attacks_alarm_own');
          loadAlarmOptions('#grac_attacks_alarm_anyone');
          loadAlarmSettings('#grac_attacks_alarm_checkbox');
          loadFilterOptions();
          loadWatchdogOptions();
          $(document).on('change', '#grac_attacks_mother_checkbox', handleMotherCheckbox)
          $('#grac_attacks_bb_code').click(displayBBCodeBox);
          $('#grac_attacks_kMp3_map').click(saveAttacksMapkMp3);
          $('#grac_attacks_clear_kMp3_map').click(clearAttacksMapkMp3);
          $('#grac_attacks_ignore').click(ignoreAttacks);
          if ($.kMp3('isKey', 'kMp3_save_attacks')) {
            $('#grac_attacks_clear_kMp3_map').addClass('click');
            $('#grac_attacks_clear_kMp3_map').addClass('kMp3_mark');
          }
        }
        function createHiddenText(txt) {
          return '<span class="grac-invisible-text">' + txt + '</span>';
        }
        function withHref(href, txt) {
          return '<a href="' + href + '">' + txt + '</a>';
        }
        function withColorMemory(txt) {
          function getRandomColor() {
            var letters = '0123456789ABCD';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 14)];
            }
            return color;
          }
          if (!(txt in color_memory)) color_memory[txt] = getRandomColor();
          return '<span style="color: ' + color_memory[txt] + '">' + txt + '</span>';
        }
        function withMultiBBCode(code, txt) {
          return createHiddenText('[' + code + ']') + txt + createHiddenText('[/' + code + ']');
        }
        function withSingleBBCode(code, txt) {
          return createHiddenText('[' + code + ']')
        }
        function fillAttackTableWithAttacks(details_array) {
          var attack_rows_str = '';
          for (var i = 0; i < details_array.length; i++) {
            attack_rows_str += getAttackRowFromDetails(details_array[i], i);
            displayed_attacks[i] = details_array[i];
            memoizeCoords(details_array[i]['source'], 'attack');
            memoizeCoords(details_array[i]['target'], 'defend');
          }
          $('#grac_attacks_table').append(attack_rows_str);
        }
        function getRgba(details) {
          var walk_time;
          if (details['sent_timestamp']) walk_time = server_timestamp - details['sent_timestamp'];
           else walk_time = server_timestamp - details['spotted_timestamp'];
          var rgba;
          var tmp;
          var gate_1 = 60 * 15;
          var gate_2 = 60 * 60;
          if (walk_time > gate_2) {
            rgba = '0, 255, 0, 0.2';
          }
          else if (walk_time >= gate_1) { // 0.6 - 0.2
            tmp = 0.6 - ((walk_time - gate_1) / ((gate_2 - gate_1) * 4)) * 1.6;
            rgba = '255, 255, 0, ' + tmp;
          }
          else if (walk_time < gate_1) { // 0.9 - 0.3
            tmp = 0.9 - (walk_time / gate_2) * 2.4;
            rgba = '255, 99, 0, ' + tmp;
          }
          return rgba;
        }
        function getAttackRowFromDetails(details, index) {
          var attack_row = '<tr name="grac_attacks_row" data-index="' + index + '">';
          var alliance = details['has_alliance'] ? '[' + withMultiBBCode('ally', withHref(details['attacking_alliance_href'], details['attacking_alliance'])) + ']' : '';
          attack_row += '<td class="grac-attack-cell-1"><input type="checkbox" name="grac_attacks_attack_checkbox" data-index="' + index + '"></td>';
          attack_row += '<td class="grac-attack-cell-2">' + withSingleBBCode(unit_img_bb[details['spotted_unit']].slice(1, - 1)) + withHref(createRuntimeCalculatorHref(details['source'], details['target'], details['time']), '<img src="' + unit_img[details['spotted_unit']] + '" class="grac-attacks-img"></img>') + '<span class="grac-small-text">' + withHref(createRuntimeCalculatorHref(details['source'], details['target'], details['time']), details['description']) + '</span><div></div></td>'; //div at end to make ctrl+c insert a line break.
          attack_row += '<td class="grac-attack-cell-3">' + createHiddenText('Objetivo: ') + details['defensorInfo']  + '</span><div></div></td>';
          attack_row += '<td class="grac-attack-cell-4">' + createHiddenText('Atacante: ') + details['atacanteInfo']  + '</span><div></div></td>';
          //attack_row += '<td class="grac-attack-cell-3">' + createHiddenText('Objetivo: ') + '(' + withMultiBBCode('village', withHref(details['target_href'], withColorMemory(details['target']))) + ') ' + createHiddenText(' - ') + withMultiBBCode('player', '<span class="grac-small-text">' + withHref(details['defender_href'], details['defender'])) + '</span><div></div></td>';
          //attack_row += '<td class="grac-attack-cell-4">' + createHiddenText('Atacante: ') + '(' + withMultiBBCode('village', withHref(details['source_href'], withColorMemory(details['source']))) + ') ' + createHiddenText(' - ') + withMultiBBCode('player', '<span class="grac-small-text">' + withHref(details['attacker_href'], details['attacker'])) + alliance + '</span><div></div></td>';
          attack_row += '<td class="grac-attack-cell-5">' + createHiddenText('Llegada ') + '<span class="grac-smaller-text">' + printTimeUpToTimestamp(details['arrival_timestamp']) + '</span><div></div></td>';
          attack_row += '<td class="grac-attack-cell-6"><div class="grac-attack-age-div" style="background-color: rgba(' + getRgba(details) + ');">' + createHiddenText('Tiempo restante: ') + '<span time="' + details['arrival_timestamp'] + '" class="count-down grac-smaller-text">' + printTimeDownToTimestamp(details['arrival_timestamp']) + '</span></div></td>';
          attack_row += '</tr>';
          return attack_row;
        }
        function updateDisplayedAttacksCount() {
          var count = 0;
          for (var i = 0; i < Object.keys(displayed_attacks).length; i++) {
            if (displayed_attacks[i]['filter'] == false) count++;
          }
          $('#grac_attacks_count').text(count);
        }
        function loadAllAttackPages() {
          var pages = $('table.borderlist').eq(2).find('tr:first > td');
          if (pages.length > 0) {
            var stopped = function () {
              $('#grac_attacks_loading').remove();
              updateAttacksTableWithAttacks();
            };
            $('#grac_attacks_header_table').after('<div id="grac_attacks_loading" style="padding-top: 25px; padding-bottom: 25px; text-align: center; font-size: 25px">Loading<br><br><img src="' + spinner_img_src + '"></div>');
            getAllAttacks(stopped);
          }
          else {
            history_attacks = loadAttacksHistory();
            loadAttacksDetails(document);
            updateAttacksTableWithAttacks();
          }
        }
        function getAllAttacksExpired() {
          saveAttacksHistory();
          handleWatchdogAttacks();
          updateLastServerTimestamp();
        }
        function handleWatchdogAttacks() {
          if (watchdog != true) {
            removeWatchdogDuplicates();
            return;
          }
          if (forum_id == null) return;
          var filtered_watchdog_attacks = filterPostedWatchdogAttacks();
          var grouped_watchdog_attacks = groupWatchdogByTarget(filtered_watchdog_attacks);
          for (var i = 0; i < Object.keys(grouped_watchdog_attacks).length; i++) {
            var key = Object.keys(grouped_watchdog_attacks) [i];
            var attacker_sorted = groupWatchdogByAttacker(grouped_watchdog_attacks[key]);
            for (var j = 0; j < Object.keys(attacker_sorted).length; j++) {
              var key = Object.keys(attacker_sorted) [j];
              postAttacksOnForum(attacker_sorted[key]);
            }
          }
          markPostedWatchdogAttacks(filtered_watchdog_attacks);
          removeWatchdogDuplicates();
        }
        function markPostedWatchdogAttacks(postedAttacks) {
          var watchdog_attacks = loadWatchdogAttacks();
          for (var i = 0; i < postedAttacks.length; i++) {
            var posted_att = postedAttacks[i];
            for (var j = 0; j < watchdog_attacks.length; j++) {
              var watchdog_att = watchdog_attacks[j];
              if (isAttackEqual(posted_att, watchdog_att)) {
                watchdog_att['posted'] = true;
                break;
              }
            }
          }
          saveWatchdogAttacks(watchdog_attacks);
        }
        function filterPostedWatchdogAttacks() {
          var watchdog_attacks = loadWatchdogAttacks();
          var filtered = [
          ];
          for (var i = 0; i < watchdog_attacks.length; i++) {
            if (watchdog_attacks[i]['posted'] == false) filtered.push(watchdog_attacks[i])
          }
          return filtered;
        }
        function groupWatchdogByTarget(watchdog_attacks) {
          var target_sorted = {
          };
          for (var i = 0; i < watchdog_attacks.length; i++) {
            var details = watchdog_attacks[i];
            var target = details['target'];
            if (target in target_sorted) {
              target_sorted[target].push(details)
            }
            else {
              target_sorted[target] = [
                details
              ]
            }
          }
          return target_sorted;
        }
        function groupWatchdogByAttacker(watchdog_attacks) {
          var attacker_sorted = {
          };
          for (var i = 0; i < watchdog_attacks.length; i++) {
            var details = watchdog_attacks[i];
            var attacker = details['attacker'];
            if (attacker in attacker_sorted) {
              attacker_sorted[attacker].push(details)
            }
            else {
              attacker_sorted[attacker] = [
                details
              ]
            }
          }
          return attacker_sorted;
        }
        async function getAllAttacks(stoppedCallback) {
          var villaIDActual = window.location.href.substring(window.location.href.indexOf('village=') + 8);
          history_attacks = loadAttacksHistory();
          incoming_attacks = [
          ];
          var attack_pages = getAttackPagesCount();
          var finished = 0;
          getAttacks = function (page) {
            $.ajax({
              type: 'POST',
              async: true,
              url: page,
              timeout: 25000,
              success: loadAttacksDetails,
              complete: function () {
                finished++;
                if (finished == attack_pages) stoppedCallback();
              }
            })
          }
          for (var i = 0; i < attack_pages; i++) {
            //var url = '/game.php?s=ally&m=attacks' + av + '&start=' + i * 50;
              var url = '/game.php?village=' + villaIDActual + '&s=ally&m=attacks' + av + '&start=' + i * 50;
              getAttacks(url);
              await sleep(1100); //Espera 1100 milisegundos entre consultas para evitar que se bloquee la ip
          }
        }
          function sleep(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
          }
        function withTimes(count) {
          if (count == 1) return count + ' time';
           else return count + ' times';
        }
        function getPossibleUnitsList(details) {
          var possible_max_sent_time = parseInt10(details['spotted_timestamp']) - parseInt10(details['last_server_timestamp']) + parseInt10(details['time_left']);
          var possible_min_sent_time = parseInt10(details['time_left']);
          var possible_max_unit = getMaxTravelingUnit(details['source'], details['target'], possible_max_sent_time);
          var possible_min_unit = getMinTravelingUnit(details['source'], details['target'], possible_min_sent_time);
          var possible_units = [
          ];
          for (var i = units_speed_sorted_reverse[possible_min_unit]; i <= units_speed_sorted_reverse[possible_max_unit]; i++) {
            possible_units.push(units_speed_sorted[i]);
          }
          return possible_units;
        }
        var attacking_units = [
          'light',
          'axe',
          'ram',
          'snob'
        ];
        var defending_units = [
          'light',
          'heavy',
          'spear',
          'snob'
        ];
        function getUnitAndTravelTime(source, target, unit) {
          return unit + ': ' + printTimeAbsolute(calculateTravelTimeInSeconds(source, target, unit));
        }
        function getUnitsAndTravelTimes(source, target, units) {
          var ut = '';
          for (var i = 0; i < units.length; i++) {
            ut += getUnitAndTravelTime(source, target, units[i]) + '<br>';
          }
          return ut;
        }
        function updateAttacksTableWithAttacks() {
          getAllAttacksExpired();
          incoming_attacks.sort(attacksCompare);
          fillAttackTableWithAttacks(incoming_attacks);
          applyFilters();
          updateDisplayedAttacksCount();
          $('tr[name="grac_attacks_row"]').hover(function () {
            var details = displayed_attacks[$(this).data('index')];
            var timestamp_before = details['last_server_timestamp'] == - 1 ? 'Beggining of Time' : printTimestamp(details['last_server_timestamp']);
            var timestamp_after = printTimestamp(details['spotted_timestamp']);
            var time_left = printTimeAbsolute(details['time_left']);
            var html = 'Información adicional: ' + details['description'] + '<br><br>';
            var possible_units = getPossibleUnitsList(details)
            if (details['spotted_unit'] == unknown_unit) {
              html += 'Enviado entre: ' + timestamp_before + ' - ' + timestamp_after + '<br>';
              html += 'Tiempo restante: ' + time_left + '<br>';
              html += 'Unidades posibles: ' + possible_units.join(', ') + '<br><br>';
            }
            else {
              html += 'Enviado en: ' + printTimestamp(details['sent_timestamp']) + '<br>';
              html += 'Hora de regreso del ejército atacante: ' + printTimestamp(details['return_timestamp'] / 1000) + '<br><br><br>';
            }
            html += 'Tiempo de viaje a la colonia atacante ' + details['source'] + ':<br>';
            html += getUnitsAndTravelTimes(getVillageCoords(), details['source'], attacking_units) + '<br>';
            html += 'Tiempo de viaje a la colonia defensora ' + details['target'] + ':<br>';
            html += getUnitsAndTravelTimes(getVillageCoords(), details['target'], defending_units) + '<br>';
            html += 'Ignorado ' + details['ignored'] + '<br><br>';
            html += 'Village ' + details['source'] + ' (' + details['attacker'] + ') esta atacando ' + withTimes(getCoordsMemory(details['source'], 'attack')) + '<br>';
            html += 'Village ' + details['target'] + ' (' + details['defender'] + ') esta defendiendo ' + withTimes(getCoordsMemory(details['target'], 'defend')) + '<br>';
            html = '<span style="font-size: 75%;">' + html + '</span>';
            $('#grac_history_attacks_box_content').html(html);
            $('#grac_history_attacks_box').show();
          }, function () {
            $('#grac_history_attacks_box').hide();
          });
        }
        function checkSingleIncomingAttackWithAlarmRules(spotted_unit, traveling_unit, signed, defending_player, attacking_alliance_id) {
          if (signed == true) return false;
          //if (premium && attacking_alliance_id == own_alliance_id) return false;
          var unit = spotted_unit == unknown_unit ? traveling_unit : spotted_unit;
          if (defending_player != self) {
            if ($('#grac_attacks_alarm_anyone').val() != 'None') {
              alarm_slowest_index = units_speed_sorted_reverse[$('#grac_attacks_alarm_anyone').val()];
              traveling_index = units_speed_sorted_reverse[unit];
              if (alarm_slowest_index <= traveling_index) return true;
            }
          }
          else {
            if ($('#grac_attacks_alarm_own').val() != 'None') {
              alarm_slowest_index = units_speed_sorted_reverse[$('#grac_attacks_alarm_own').val()];
              traveling_index = units_speed_sorted_reverse[unit];
              if (alarm_slowest_index <= traveling_index) return true;
            }
          }
          return false
        }
        function checkAllIncomingAttacks() {
          var stopped = function () {
            getAllAttacksExpired();
            var found_attacks = [
            ];
            for (var i = 0; i < incoming_attacks.length; i++) {
              var attack_details = incoming_attacks[i];
              if (checkSingleIncomingAttackWithAlarmRules(attack_details['spotted_unit'], attack_details['unit'], attack_details['signed'], attack_details['defender'], attack_details['attacking_alliance_id'])) {
                if (!getAttackFromHistory(attack_details) ['ignored']) found_attacks.push(attack_details);
              }
            }
            if (found_attacks.length > 0 && $('#grac_attacks_alarm_checkbox').attr('checked')) {
              displayIncomingAttacksBox(found_attacks);
              $('#grac_alarm_player') [0].load();
              $('#grac_alarm_player') [0].play();
            }
          };
          getAllAttacks(stopped);
        }
        function displayIncomingAttacksBox(found_attacks) {
          var content = '';
          for (var i = 0; i < found_attacks.length; i++) {
            var attack_details = found_attacks[i];
            var alliance = attack_details['has_alliance'] ? '[' + withMultiBBCode('ally', withHref(attack_details['attacking_alliance_href'], attack_details['attacking_alliance'])) + ']' : '';
            content += '<div style="width: 380px; display: block;">'
            content += '<img class="grac-attacks-img-ia-box" src="' + unit_img[attack_details['spotted_unit']] + '"></img>' + withSingleBBCode(unit_img_bb[attack_details['unit']].slice(1, - 1), '') + ' <div style="max-width: 110px; overflow: hidden; display: inline-block; white-space: nowrap; vertical-align: top; font-size: 75%; line-height: 16px;">' + attack_details['description'] + '</div> ' + printTimeUpToTimestamp(attack_details['arrival_timestamp']) + ' [za <span class="count-down" time="' + attack_details['arrival_timestamp'] + '">' + printTimeDownToTimestamp(attack_details['arrival_timestamp']) + '</span>]<br>';
            content += 'Objetivo: ' + withMultiBBCode('player', withHref(attack_details['defender_href'], attack_details['defender'])) + ' en ' + withMultiBBCode('village', withHref(attack_details['target_href'], attack_details['target'])) + '<br>';
            content += 'Atacante: ' + withMultiBBCode('player', withHref(attack_details['attacker_href'], attack_details['attacker'])) + alliance + ' de ' + withMultiBBCode('village', withHref(attack_details['source_href'], attack_details['source'])) + '<br>';
            if (attack_details['return_timestamp']) content += 'El ejército del atacante volverá ' + printTimeUpToTimestamp(attack_details['return_timestamp']) + '<br>';
            content += '<br></div>';
          }
          $('#grac_attacks_alarm_box_content').html(content);
          $('#grac_attacks_alarm_box').show();
        }
        function handleMotherCheckbox() {
          if ($(this).attr('checked')) {
            $('input:checkbox[name=grac_attacks_attack_checkbox]').each(function (_, elem) {
              if ($(elem).is(':visible')) $(elem).attr('checked', true);
            })
          }
          else {
            $('input:checkbox[name=grac_attacks_attack_checkbox]').each(function (_, elem) {
              if ($(elem).is(':visible')) $(elem).attr('checked', false);
            })
          }
        }
        function getSelectedAndVisibleAttacks() {
          var attacks = [
          ];
          $('input:checkbox[name=grac_attacks_attack_checkbox]').each(function (_, elem) {
            if (elem.checked && $(elem).is(':visible')) attacks.push(displayed_attacks[$(this).data('index')]);
          })
          return attacks;
        }
        function displayBBCodeBox() {
          var attacks = getSelectedAndVisibleAttacks();
          var bb_codes_str = '';
          if (attacks.length < 1) return;
          for (var i = 0; i < attacks.length; i++) bb_codes_str += getBBCodeFromAttack(attacks[i]);
          $('#grac_bb_codes_textarea').text(bb_codes_str);
          $('#kMp3_overlay').fadeIn(1).bind('click', function () {
            $('#kMp3_overlay, #kMp3_box').fadeOut('fast')
          });
          $('#kMp3_box').fadeIn('fast');
          $('#grac_bb_codes_textarea').kMp3('resizeTextarea');
          $('#grac_bb_codes_textarea').select();
        };
        function announceWorkDone() {
          $('#grac_attacks_done').fadeIn(600).fadeOut(1500);
        }
        function clearAttacksMapkMp3() {
          $.kMp3('deleteKey', 'kMp3_save_attacks');
          $('#grac_attacks_clear_kMp3_map').removeClass('click');
          $('#grac_attacks_clear_kMp3_map').removeClass('kMp3_mark');
          announceWorkDone();
        }
        function saveAttacksMapkMp3() {
          var attacks = getSelectedAndVisibleAttacks();
          if (attacks.length < 1) return;
          var kMp3_attacks = {
          };
          for (var i = 0; i < attacks.length; i++) {
            var details = attacks[i];
            var def_villageId = details['target_href'];
            def_villageId = def_villageId.substring(def_villageId.lastIndexOf('id=') + 3);
            var off_player = details['attacker'];
            var off_playerId = details['attacker_href'];
            off_playerId = off_playerId.substring(off_playerId.lastIndexOf('id=') + 3);
            var off_village = details['source'];
            var off_villageId = details['source_href'];
            off_villageId = off_villageId.substring(off_villageId.lastIndexOf('id=') + 3);
            var off_ally = '-';
            var off_allyId = '-';
            if (details['has_alliance']) {
              var off_ally = details['attacking_alliance'];
              var off_allyId = details['attacking_alliance_id'];
            }
            var single_attack = {
              0: off_player,
              1: off_playerId,
              2: off_village,
              3: off_villageId,
              4: off_ally,
              5: off_allyId,
              6: details['arrival_timestamp'] / 1000,
              7: details['description']
            };
            if (kMp3_attacks[def_villageId] == undefined) {
              kMp3_attacks[def_villageId] = {
              };
              kMp3_attacks[def_villageId][0] = single_attack;
              kMp3_attacks[def_villageId].length = 1;
            }
            else {
              kMp3_attacks[def_villageId][kMp3_attacks[def_villageId].length] = single_attack;
              kMp3_attacks[def_villageId].length = kMp3_attacks[def_villageId].length + 1;
            }
          }
          $.kMp3('saveKey', 'kMp3_save_attacks', kMp3_attacks);
          $('#grac_attacks_clear_kMp3_map').addClass('click');
          $('#grac_attacks_clear_kMp3_map').addClass('kMp3_mark');
          announceWorkDone();
        }
        function getBBCodeFromAttack(attack_details) {
          var bb_code = '';
          var alliance = attack_details['has_alliance'] ? '[[ally]' + attack_details['attacking_alliance'] + '[/ally]]' : '';
          if (attack_details['spotted_unit'] != unknown_unit) {
            bb_code += unit_img_bb[attack_details['spotted_unit']];
          }
          else bb_code += '[img_attack]';
          bb_code += attack_details['description'];
          bb_code += ' ' + printTimeUpToTimestamp(attack_details['arrival_timestamp']) + ' [dentro de ' + printTimeAbsolute(attack_details['time']) + ']\n';
          bb_code += 'Objetivo: [player]' + attack_details['defender'] + '[/player] en [village]' + attack_details['target'] + '[/village]\n';
          bb_code += 'Atacante: [player]' + attack_details['attacker'] + '[/player]' + alliance + ' desde [village]' + attack_details['source'] + '[/village]';
          if (attack_details['return_timestamp']) bb_code += '\nEl ejército del atacante volverá ' + printTimeUpToTimestamp(attack_details['return_timestamp']);
          if (attack_details['sent_timestamp']) bb_code += ' (Enviado en ' + printTimestamp(attack_details['sent_timestamp']) + ')';
          return bb_code + '\n';
        }
        function ignoreAttacks() {
          var attacks = getSelectedAndVisibleAttacks();
          if (attacks.length < 1) return;
          for (var i = 0; i < attacks.length; i++) {
            var found_attack = findAttackInHistory(attacks[i]);
            if (found_attack) found_attack['ignored'] = true;
            attacks[i]['ignored'] = true;
          }
          saveAttacksHistory();
          announceWorkDone();
        }
        function pushAttackToHistory(attack_details) {
          var last_timestamp = getLastServerTimestamp();
          var unit = unknown_unit;
          var sent_timestamp;
          var return_timestamp;
          if (attack_details['unit'] == 'snob') unit = 'snob';
           else if (last_timestamp > 0) {
            var max_possible_unit = getMaxTravelingUnit(attack_details['source'], attack_details['target'], ((server_timestamp - last_timestamp) + parseInt10(attack_details['time'])));
            if (max_possible_unit == attack_details['unit']) unit = max_possible_unit;
          }
          if (unit != unknown_unit) {
            return_timestamp = calculateReturnTimestamp(attack_details['source'], attack_details['target'], attack_details['unit'], attack_details['arrival_timestamp']);
            sent_timestamp = parseInt10(attack_details['arrival_timestamp']) / 1000 - parseInt10(calculateTravelTimeInSeconds(attack_details['source'], attack_details['target'], attack_details['unit']));
          }
          var history_details = {
            description: attack_details['description'],
            source: attack_details['source'],
            target: attack_details['target'],
            last_server_timestamp: last_timestamp,
            spotted_timestamp: server_timestamp,
            time_left: attack_details['time'],
            spotted_unit: unit,
            ignored: false,
            posted: attack_details['posted'],
            sent_timestamp: sent_timestamp,
            return_timestamp: return_timestamp
          }
          if (history_attacks[attack_details['arrival_timestamp']] == undefined) {
            history_attacks[attack_details['arrival_timestamp']] = {
            };
            history_attacks[attack_details['arrival_timestamp']][0] = history_details;
            history_attacks[attack_details['arrival_timestamp']].length = 1;
          }
          else {
            history_attacks[attack_details['arrival_timestamp']][history_attacks[attack_details['arrival_timestamp']].length] = history_details;
            history_attacks[attack_details['arrival_timestamp']].length = history_attacks[attack_details['arrival_timestamp']].length + 1;
          }
          return history_details
        }
        function getAttackFromHistory(attack_details) {
          var found_attack = findAttackInHistory(attack_details);
          if (found_attack) return {
            spotted_unit: found_attack['spotted_unit'],
            spotted_timestamp: found_attack['spotted_timestamp'],
            last_server_timestamp: found_attack['last_server_timestamp'],
            ignored: found_attack['ignored'],
            time_left: found_attack['time_left'],
            posted: found_attack['posted'],
            sent_timestamp: found_attack['sent_timestamp'],
            return_timestamp: found_attack['return_timestamp']
          }
          return null;
        }
        function findAttackInHistory(attack_details) {
          var attacks_on_timestamp = history_attacks[attack_details['arrival_timestamp']];
          if (attacks_on_timestamp == undefined) return;
          for (var i = 0; i < attacks_on_timestamp.length; i++) {
            var history_details = attacks_on_timestamp[i];
            if (history_details['source'] == attack_details['source'] && history_details['target'] == attack_details['target']) return history_details;
          }
        }
        function cleanAttacksHistory() {
          var possible_time = parseInt10(server_timestamp) * 1000;
          for (var i = 0; i < Object.keys(history_attacks).length; i++) {
            var key = parseInt10(Object.keys(history_attacks) [i]);
            if (key < possible_time) delete history_attacks[key];
          }
        }
        function saveAttacksHistory() {
          cleanAttacksHistory();
          $.kMp3('saveKey', 'grac_history_attacks', history_attacks);
        }
        function loadAttacksHistory() {
          if ($.kMp3('isKey', 'grac_history_attacks')) return $.kMp3('loadKey', 'grac_history_attacks');
           else return {
          };
        }
        function attacksCompare(a, b) {
          if (a['arrival_timestamp'] < b['arrival_timestamp']) return - 1;
          if (a['arrival_timestamp'] > b['arrival_timestamp']) return 1;
          return 0;
        }
        hideRealAttacksTable();
        createAttackTableWithFilters();
        loadAllAttackPages();
        setInterval(checkAllIncomingAttacks, refresh_interval)
      }
    }
  }(kMp3);
  css += '.kMp3_toggle_sim { cursor: pointer; width: 25px; text-align: center; }',
  function (kMp3) {
    kMp3.module.barracks = {
      matcher: page.match('s=build_barracks'),
      fn: function () {
          document.querySelectorAll('.countdown').forEach((cdown) => cdown.setAttribute('reload','false'));
        var grac_auto_recruit_queue = {
          farmer: false,
          sword: false,
          spear: false,
          axe: false,
          bow: false,
          spy: false,
          light: false,
          heavy: false,
          ram: false,
          kata: false
        };
        var grac_recruit_res = {
        };
        var auto_recruit_interval = 10000;
        var isModern = $('div.unitbox').length > 0 ? true : false;
        function loadRecruitQueue() {
          var loaded_grac_auto_recruit = {
          };
          if ($.kMp3('isKey', 'grac_auto_recruit')) loaded_grac_auto_recruit = $.kMp3('loadKey', 'grac_auto_recruit');
          return loaded_grac_auto_recruit
        }
        function loadVillageRecruitQueue() {
          var village = getVillageId();
          var loaded_grac_auto_recruit = loadRecruitQueue();
          var new_grac_auto_recruit = {
          };
          if (loaded_grac_auto_recruit[village]) new_grac_auto_recruit = loaded_grac_auto_recruit[village];
          return new_grac_auto_recruit;
        };
        function saveVillageRecruitQueue() {
          var village = getVillageId();
          var saved = loadRecruitQueue();
          saved[village] = grac_auto_recruit_queue;
          $.kMp3('saveKey', 'grac_auto_recruit', saved);
        };
        function placeDot(self, dot) {
          if (self.find('a:first').length > 0) self.find('a:first').before(dot + ' ');
           else self.before(dot);
        }
        function recruit() {
          document.forms['kingsage'].submit();
        }
        function checkAutoRecruit() {
          var auto_units = 0;
          for (var unit in grac_auto_recruit_queue) {
            if (grac_auto_recruit_queue[unit]) auto_units++;
          }
          if (auto_units == 0) return;
          var under_recruit = $('body').find('a[href*="cancelRecruit"]');
          var prev_recruited;
          if (under_recruit.length > 0) {
            prev_recruited = under_recruit.eq(0).parent().parent().find('img:first').attr('src');
            prev_recruited = prev_recruited.substring(prev_recruited.indexOf('unit_') + 5, prev_recruited.indexOf('.png'))
          }
          if (under_recruit.length > 1) return;
          var stone = parseInt10($('#stone').text().replace('.', ''));
          var wood = parseInt10($('#wood').text().replace('.', ''));
          var iron = parseInt10($('#iron').text().replace('.', ''));
          var workers = parseInt10($('div.freeSettlers > span').text().replace('.', ''));
          for (var unit in grac_auto_recruit_queue) {
            if (auto_units > 1 && unit == prev_recruited) continue;
            if (grac_auto_recruit_queue[unit]) {
              var res = grac_recruit_res[unit];
              var min_recr = 65000;
              min_recr = Math.floor(stone / res[0]) < min_recr ? Math.floor(stone / res[0])  : min_recr;
              min_recr = Math.floor(wood / res[1]) < min_recr ? Math.floor(wood / res[1])  : min_recr;
              min_recr = Math.floor(iron / res[2]) < min_recr ? Math.floor(iron / res[2])  : min_recr;
              min_recr = Math.floor(workers / res[3]) < min_recr ? Math.floor(workers / res[3])  : min_recr;
              if (min_recr > 300) min_recr = 300;
              if (min_recr > 100 && (unit == 'heavy' || unit == 'light')) min_recr = 100;
              if (min_recr > 20 && (unit == 'ram' || unit == 'kata')) min_recr = 20;
              if (min_recr > 0) {
                $('input[name="' + unit + '"]').val(min_recr)
                recruit();
                break;
              }
            }
          }
        };
        function fillInUnits(troops) {
          for (var unit in unit_runtime) if (unit_runtime.hasOwnProperty(unit)) {
            var avail = $('input[name="' + unit + '"]').siblings('span').html().replace(/[\(\)\.]/g, '');
            $('input[name="' + unit + '"]').val(parseInt10(troops[unit]) < parseInt10(avail) ? troops[unit] : avail)
          }
        }
        function insertAll(elem) {
          elem.each(function () {
            $(this).prev('input').val($(this).text().replace(/[\(\)\.]/g, ''))
          })
        }
        if (identifyActiveTab('&m=command')) page.match('sub=send') ? $('select[name*="kata_target"]').val(k.kata_select)  : ($('input[id*="send_"]').focusin(function () {
          0 == $('#send_x, #send_y').val() && $('input[id*="send_"]').val('')
        }).focusout(function () {
          '' == $('#send_x, #send_y').val() && $('input[id*="send_"]').val('0')
        }), 0 == $('div[class*="button favourites"]').length ? ($('td[valign="top"] > span[class="click"]').eq(2).before('<span class="click" id="kMp3_insertAll">' + arrow + ' ' + l.selectAll + '</span><br />'), $('#kMp3_insertAll').bind('click', function () {
          insertAll($('table[class*="borderlist"]').eq(2).find('td > span'))
        }), k.modul.trooplinks && $('table.borderlist').eq(2).after(displayTrooplinks()))  : ($('div[class*="boxOptions"]').append('<div class="awesome-button" style="left: 409px; position: absolute; test-align: center; top: 90px;  width: 120px; text-align:center;"><span style="color: #FCD87E;" id="kMp3_insertAll">' + l.selectAll + '</span></div>'), $('#kMp3_insertAll').bind('click', function () {
          insertAll($('div[class*="quantity"] > span'))
        }), k.modul.trooplinks && $('div.boxOptions').before(displayTrooplinks())), $('span.kMp3_mark').click(function () {
          var number = $(this).attr('id');
          fillInUnits(k.trooplinks[number.substring(number.indexOf('kMp3_trooplink_') + 14)])
        }));
         else if (k.modul.massdisband && page.match('m=massdisband')) $(document).ready(function () {
          $('input[id*="fillOutButton"]').replaceWith('<input id="kMp3_disband" type="submit" value="(kMp3) ' + l.fillIn + '">'),
          $('input#kMp3_disband').click(function () {
            var wanted_units = [
            ];
            $('form#groupFilloutOption > table').find('input[id*="group"]').each(function () {
              var unit = $(this).attr('id').replace('group-', '');
              wanted_units[unit] = $(this).val()
            }),
            $('table#massDisbandTable > tbody > tr').each(function () {
              $(this).find('td > span[class*="click"]').parent().each(function () {
                var elem = $(this).find('input[id*="amount_"]'),
                unit = $(elem).attr('id');
                unit = unit.substring(unit.indexOf('_') + 1, unit.lastIndexOf('_'));
                var amount = $(elem).attr('value');
                parseInt10(amount) > parseInt10(wanted_units[unit]) && $(this).find('input[id*="disband_"]').val(parseInt10(amount) - parseInt10(wanted_units[unit]))
              })
            })
          })
        });
         else if (identifyActiveTab('&type=sim_battle')) {
          var cell = $('form[name="kingsage"] > table.borderlist > tbody > tr:last'),
          cellText = cell.find('td:first').text(),
          minus25 = '<span id="minus25" class="click">-25%</span>',
          plus25 = '<span id="plus25" class="click">+25%</span>';
          cell.find('td:first').html(cellText.replace('-25%', minus25).replace('+25', plus25)),
          $('#minus25, #plus25').click(function () {
            var rel = $(this).html().replace('%', '');
            cell.find('td:last > input').val(rel)
          }),
          k.modul.simulator && page.match('inta=battle') && ($('table.borderlist').slice(1, 4).find('tr:first').prepend('<td class="kMp3_toggle_sim" rowspan="4">&raquo;</td>'), $('table.borderlist').slice(1, 4).find('tr').each(function () {
            $(this).find('td > span, th > img').each(function () {
              $(this).parent().addClass('kMp3_toggle');
              var unit_long = $(this).attr('title');
              unit_long && (unit_long = unit_long.substring(0, unit_long.indexOf(' ')), $(this).html(unit_long))
            }),
            $(this).find('th:gt(11), td:gt(11)').css('display', 'none').addClass('k_toggle').removeClass('kMp3_toggle')
          }), $('.kMp3_toggle_sim').hover(function () {
            $(this).addClass('marked')
          }, function () {
            $(this).removeClass('marked')
          }), $('.kMp3_toggle_sim').bind('click', function () {
            $('.kMp3_toggle, .k_toggle').toggle()
          }))
        }
        else if (identifyActiveTab('&m=recruit')) {
            if (document.getElementsByClassName('borderlist').length>3) {
                try{
                    var tablaAModificar = document.getElementsByClassName('borderlist')[3];
                    var numeroDeFilas = tablaAModificar.getElementsByTagName('tr').length;
                    tablaAModificar.getElementsByTagName('tr')[0].getElementsByTagName('th')[0].textContent=tablaAModificar.getElementsByTagName('tr')[0].getElementsByTagName('th')[0].textContent + ' (' + (numeroDeFilas - 2) + ' líneas)';
                }  catch (ex){
                    console.log(ex.Message);
                }
            }
          $('body').find('a[href*="m=units&sub=details"]').each(function () {
            var self = $(this);
            var box = isModern ? self.parent().parent().parent()  : self.parent().parent();
            var stone;
            var wood;
            var iron;
            var workers;
            var unit;
            var href;
            if (isModern) {
              unit = box.find('a:first').attr('href');
              box = box.find('div.body:first');
              stone = parseInt10(box.find('span').eq(2).text().replace('.', ''));
              wood = parseInt10(box.find('span').eq(4).text().replace('.', ''));
              iron = parseInt10(box.find('span').eq(6).text().replace('.', ''));
              workers = parseInt10(box.find('span').eq(8).text().replace('.', ''));
            }
            else {
              stone = parseInt10(box.find('td').eq(1).text().replace('.', ''));
              wood = parseInt10(box.find('td').eq(2).text().replace('.', ''));
              iron = parseInt10(box.find('td').eq(3).text().replace('.', ''));
              workers = parseInt10(box.find('td').eq(4).text().replace('.', ''));
              unit = box.find('a:first').attr('href');
            }
            unit = unit.substring(unit.indexOf('&unit=') + 6);
            grac_auto_recruit_queue = loadVillageRecruitQueue();
            grac_recruit_res[unit] = [
              stone,
              wood,
              iron,
              workers
            ];
            var img_src = grac_auto_recruit_queue[unit] ? '/img/dots/green.png' : '/img/dots/red.png';
            if (stone > 0) {
              placeDot(self.parent(), '<img name="grac_auto_recruit" class="click" src="' + img_src + '" style="width: 8px; height: 8px; vertical-align: middle;" data-unit="' + unit + '">');
            }
            else {
              placeDot(self.parent(), '<img src="/img/dots/red.png" style="width: 8px; height: 8px; vertical-align: middle;">');
            }
          })
        };
        setInterval(checkAutoRecruit, auto_recruit_interval);
        setTimeout(function () {
          location.reload();
        }, 900000);
        $('img[name="grac_auto_recruit"]').click(function () {
          var self = $(this);
          var unit = self.data('unit');
          var src;
          if (grac_auto_recruit_queue[unit]) {
            grac_auto_recruit_queue[unit] = false;
            src = '/img/dots/red.png';
          }
          else {
            grac_auto_recruit_queue[unit] = true;
            src = '/img/dots/green.png';
          }
          self.attr('src', src);
          saveVillageRecruitQueue();
        });
      }
    }
  }(kMp3);
  !function (kMp3) {
    kMp3.module.forum = {
      matcher: k.modul.bbCodeExport && page.match('s=ally&m=forum'),
      fn: function () {
        $('iframe[src*="forum.php"]').load(function () {
          var iframeURL = $('iframe[src*="forum.php"]').get(0).contentDocument.location.href;
          if (iframeURL.match('s=forum_thread' + av + '&thread_id=')) {
            var frame = $('iframe[src*="forum.php"]').contents();
            $(frame).find('div.smallButton:first').before('<div id="kMp3_save_thread" class="smallButton"><span style="cursor: pointer;">(kMp3) ' + l.saveThread + '</span></div>'),
            $(frame).find('#kMp3_save_thread').bind('click', function () {
              $(this).fadeOut().fadeIn();
              var uri = $('iframe[src*="forum.php"]').contents().find('td.headerInfo > a').attr('href'),
              threadId = uri.substring(uri.indexOf('thread_id=') + 10),
              threadName = $('iframe[src*="forum.php"]').contents().find('td.headerInfo > a').html();
              '' != av && (threadId = threadId.replace(av, ''));
              var obj = {
                id: threadId,
                name: threadName
              };
              $.kMp3('saveKey', 'kMp3_thread', obj)
            })
          }
        })
      }
    }
  }(kMp3);
  css += '#kMp3_box { background-color: #fff; display: none; border-radius: 5px; position: fixed; width: 500px; left: 50%; top: 5%; margin-left: -250px; padding: 6px; z-index: 200; }',
  css += '.kMp3_progressOuter { border:1px solid #CFAB65; overflow: hidden; width:100px; height:10px; background: #CFAB65; }',
  css += '.kMp3_progressInner { width: 0px; height: 10px; background: #FFCC6E; }',
  function (kMp3) {
    kMp3.module.infoally = {
      matcher: page.match('s=info_ally') && !premium || identifyActiveTab('s=info_ally&m=profile'),
      fn: function () {
        function getPlayerInfo(members, callback) {
          var href = members.shift();
          $.ajax({
            type: 'POST',
            url: href,
            success: function (data) {
              callback(members, data)
            }
          })
        }
        var cachedTable = $('table.borderlist').eq(2);
        cachedTable.append('<tr><td colspan="2"><span class="click" id="kMp3_getAllyTroopPoints">' + l.allyTrooppoints + '</span></td></tr>'),
        $('#kMp3_getAllyTroopPoints').bind('click', function () {
          $.kMp3('saveKey', 'jugadores_kMp3_by_JM', ''); //Limpiamos la info para iniciar la carga
          $(this).unbind('click').fadeOut();
          var membersPage = cachedTable.find('a[href*="info_member"]').attr('href');
          $.when($.ajax({
            type: 'POST',
            url: membersPage
          }).then(function (data) {
            function getAllPlayerInfos(members, callback) {
              function callQueue(members) {
                getPlayerInfo(members, function (members, playerInfo) {
                  var player = [
                  ],
                  playerName = $(playerInfo).find('h1').eq(1).text();
                  playerName = playerName.substring(playerName.indexOf(' ') + 1),
                  playerName = playerName.replace(/\(.*\)/, '').trim(),
                  player.push(playerName),
                  player.push(calculateTroopScore(playerInfo)),
                  i++,
                  $('#kMp3_getAllyTroopPoints').text(l.loading + ': ' + i + '/' + len),
                  $('#kMp3_progress').css({
                    width: i * (100 / len) + '%'
                  }),
                  allyTroopPoints.push(player),
                  0 === --left ? ($('#kMp3_getAllyTroopPoints').parent().parent().remove(), callback(allyTroopPoints))  : callQueue(members)
                })
              }
              var allyTroopPoints = [
              ],
              len = members.length,
              left = len,
              i = 0;
              $('#kMp3_getAllyTroopPoints').removeClass('click').text(l.loading + ': ' + i + '/' + len).fadeIn().parent().attr('colspan', 0).after('<td><div class="kMp3_progressOuter"><div id="kMp3_progress" class="kMp3_progressInner" maxwidth="100"></div></div></td>'),
              callQueue(members)
            }
            function showData(allyTroopPoints) {
                var listadoActual = $.kMp3('loadKey', 'jugadores_kMp3_by_JM');
                var cachedTable = $('table.borderlist').eq(3);
                cachedTable.append('<tr><td Width=50%>' + listadoActual + '</td></tr>');
              var allTroopPoints = 0,
              allPercentage = 0,
              allyName = $('table.borderlist').eq(2).find('tr').eq(2).find('td').eq(1).html();
              function getDataReady(lineStart, lineMiddle, lineEnd, data) {
                var i,
                percentage,
                divider,
                o = '',
                len = data.length;
                for (i = 0; len > i; i++) divider = 0 == data[i][1][1] ? 100 : data[i][1][1],
                percentage = data[i][1][0] / divider * 100,
                o += lineStart + data[i][0] + lineMiddle + $.kMp3('prettyNumber', data[i][1][0]) + ' (' + percentage.toFixed(2) + '%)' + lineEnd;
                return o + lineEnd
              }
              allyTroopPoints.sort(function (a, b) {
                return b[1][0] - a[1][0]
              });
              for (i = 0; i < allyTroopPoints.length; i++) {
                allTroopPoints += allyTroopPoints[i][1][0],
                allPercentage += allyTroopPoints[i][1][1];
              }
              allTroopPoints = allTroopPoints + ' (' + ((allTroopPoints / allPercentage) * 100).toFixed(2) + '%)';
              var o = arrow + ' <span class="click" id="kMp3_createBB">(kMp3) ' + l.bbCode + '</span><table class="borderlist" style="width: 420px;">';
              o += '<tr><th>' + l.player + '</th><th>' + l.trooppoints + '</th></tr>',
              o += getDataReady('<tr><td>', '</td><td>', '</td></tr>', allyTroopPoints),
              o += '<tr><th>Overall</th><th>' + allTroopPoints + '</th></tr>',
              o += '</table><br />',
              $('table.borderlist').eq(3).before(o),
              $('#kMp3_createBB').bind('click', function () {
                $('body').append('<div id="kMp3_box"><textarea style="width: 99%; resize: none;" id="kMp3_data"></textarea></div><div id="kMp3_overlay" class="kMp3-backlight"></div>'),
                $('#kMp3_data').text(getDataReady('[player]', '[/player]: ', '\n', allyTroopPoints) + '[ally]' + allyName + '[/ally]: ' + allTroopPoints).select(),
                $('#kMp3_overlay').fadeIn().bind('click', function () {
                  $('#kMp3_overlay, #kMp3_box').kMp3('fadeOutRemove')
                }),
                $('#kMp3_box').fadeIn(),
                $('#kMp3_data').kMp3('resizeTextarea')
              })
            }
            var members = [
            ];
            $(data).find('table.borderlist').eq(2).find('a[href*="info_player"]').each(function () {
              members.push($(this).attr('href'))
            }),
            getAllPlayerInfos(members, showData)
          }))
        })
      }
    }
  }(kMp3);
  css += 'tr.kMp3_selected td { background: url("img/layout/bg_table_cell_marked2.jpg") repeat-x scroll 0 0 transparent !important; }',
  css += '.unselectable { user-select: none; -moz-user-select: none; -khtml-user-select: none; }',
  css += '.kMp3_remove_selection { display: inline; background-color: #fff; cursor: pointer; position: relative; float: right; z-index: 150; color: crimson; font-weight: bold; }',
  css += '#kMp3_showSelectedSetts { position: fixed; background: #FFF; font-size: 10pt; border-radius: 5px; padding: 5px; z-index: 200; top: 10%; left: 50%; margin-left: -310px; width: 620px; max-height: 85%; overflow-y: auto; }',
  function (kMp3) {
    kMp3.module.infoplayer = {
      matcher: page.match('s=info_player') && !(page.match('m=statistics') || page.match('m=conquers')),
      fn: function () {
        var post_details = {
          settlementName: 'kMp3_settname',
          nick: 'kMp3_player',
          village: 'kMp3_coords',
          continent: 'kMp3_continent',
          points: 'kMp3_points'
        };
        post_details.std_input = post_details.village,
        k.modul.bbCodeExport && ($('table.borderlist').eq(3).prepend('<tr><th colspan="3"><span class="click" id="kMp3_enablebbCodeExport">' + arrow + ' (kMp3) ' + l.enableBBCodeExport + '</span></th></tr>'), $('#kMp3_enablebbCodeExport').bind('click', function () {
          function getKontinent(koords) {
            return koords.substring(4, 5) + koords.substring(0, 1)
          }
          if ($(this).parent().parent().replaceWith('<tr><th colspan="3">' + l.exportBBCode + '</td></tr><tr><td id="kMp3_threadId_avail" colspan="3"></td></tr><tr><td colspan="2">\t\t\t\t\t<input type="radio" value="kontinent" name="kMp3_sel_setts"><span style="vertical-align: bottom; display: inline-block; width: 100px;">' + l.sortContinent + '</span>\t\t\t\t\t<input type="radio" value="koords" name="kMp3_sel_setts" checked="checked"><span style="vertical-align:bottom">' + l.sortCoords + '</span></td><td></td></tr><td colspan="2">\t\t\t\t\t<input type="radio" value="points" name="kMp3_sel_setts"><span style="vertical-align: bottom; display: inline-block; width: 100px">' + l.sortPoints + '</span>\t\t\t\t\t<input type="radio" value="name" name="kMp3_sel_setts"><span style="vertical-align: bottom">' + l.sortName + '</span></td><td><input type="submit" id="kMp3_sel_setts_submit" value="' + l.bbCode + '"></td></tr>\t\t\t\t\t<tr><td colspan="3"><span class="click kMp3_mark" id="kMp3_select_all">' + arrow + ' ' + l.selectAll + '</span> <span class="click kMp3_mark" id="kMp3_deselect_all">' + arrow + ' ' + l.deselectAll + '</span></td></tr>'), $('table.borderlist').eq(3).prepend(''), $('table.borderlist').eq(3).addClass('unselectable'), $.kMp3('isKey', 'kMp3_thread')) {
            var thread = $.kMp3('loadKey', 'kMp3_thread');
            threadName = thread.name,
            $('#kMp3_threadId_avail').html('<span style="color: green; font-weight: bold;">' + l.thread + ' "' + threadName + '" ' + l.selected + '.</span>')
          } else $('#kMp3_threadId_avail').html('<span style="color: crimson; font-weight: bold;">' + l.goChooseThread + '.</span>');
          $(document).ready(function () {
            $.fn.selectSettlement = function () {
              $(this).hasClass('kMp3_selected') || $(this).addClass('kMp3_selected').find('td:first').find('a, img').css('float', 'left').end().append('<div class="kMp3_remove_selection"><div style="position: absolute; right: 0;">' + l.deselect + '</div></div>')
            };
            var selectable = !1;
            $('table.borderlist').eq(3).find('tr:gt(5)').mousedown(function () {
              selectable = !0
            }).mouseup(function () {
              selectable = !1
            }).mousemove(function () {
              selectable && $(this).selectSettlement()
            }).click(function () {
              $(this).selectSettlement()
            }),
            $('.kMp3_remove_selection').live('click', function () {
              $(this).parent().parent().removeClass('kMp3_selected').end().end().fadeOut().remove()
            })
          }),
          $('#kMp3_select_all').bind('click', function () {
            $(this).fadeOut().fadeIn(),
            $('table.borderlist').eq(3).find('tr:gt(5)').each(function () {
              $(this).selectSettlement()
            })
          }),
          $('#kMp3_deselect_all').bind('click', function () {
            $(this).fadeOut().fadeIn(),
            $('table.borderlist').eq(3).find('tr:gt(5)').each(function () {
              $(this).removeClass('kMp3_selected').find('td:first > div').remove()
            })
          }).fadeOut().fadeIn(),
          $('#kMp3_sel_setts_submit').bind('click', function () {
            function formatOutput(sett, r) {
              var o = r;
              return o = o.replace(new RegExp('{' + post_details.nick + '}', 'g'), ' ' + sett.nick),
              o = o.replace(new RegExp('{' + post_details.settlementName + '}', 'g'), ' ' + sett.sett),
              o = o.replace(new RegExp('{' + post_details.village + '}', 'g'), ' [village]' + sett.pos + '[/village]'),
              o = o.replace(new RegExp('{' + post_details.continent + '}', 'g'), ' K' + sett.continent),
              o = o.replace(new RegExp('{' + post_details.points + '}', 'g'), ' ' + sett.points)
            }
            function confirmPost(setts, playerName, threadName, threadId, settsPerPosts) {
              function updatePreview() {
                $('#kMp3_post_preview').html($('#kMp3_post_top').val() + '<br />' + formatOutput({
                  pos: 'xxx|yyy',
                  continent: 'YX',
                  points: '10000',
                  sett: l.settlement,
                  nick: l.player
                }, $('#kMp3_post_body').val()) + '<br />[...]<br />' + $('#kMp3_post_footer').val())
              }
              var postCount = Math.ceil(setts.length / parseInt(settsPerPosts, 10));
              $('body').append('<div id="kMp3_overlay" class="kMp3-backlight" style="display: block !important;"><h3 style="color: white; text-align:left; opacity: 1; margin: 1em;">' + l.close + '</h3></div>\t\t\t\t\t\t\t\t\t\t<div id="kMp3_showSelectedSetts">\t\t\t\t\t\t\t\t\t\t\t<div style="line-height: 1.1; text-align: left; width: 50%; margin: 0; float: left; border-right: 1px solid #DDD;">\t\t\t\t\t\t\t\t\t\t\t\t<h3>' + l.summary + ':</h3>\t\t\t\t\t\t\t\t\t\t\t\t' + l.postIn + ' "' + threadName + '" (<a href="/forum.php?s=forum_thread&thread_id=' + threadId + av + '" target="_blank">' + threadId + '</a>)<br /> ' + l.player + ': ' + playerName + '<br />\t\t\t\t\t\t\t\t\t\t\t\t' + l.amountOfSetts + ': ' + setts.length + '<br />' + printf(l.postsToBeCreated, postCount) + '<br /><br />\t\t\t\t\t\t\t\t\t\t\t\t<h3>' + l.formatting + ':</h3>\t\t\t\t\t\t\t\t\t\t\t\t<h4>' + l.header + ':</h4><textarea style="min-width: 290px; max-width: 290px; min-height: 60px; max-height: 60px;" id="kMp3_post_top"></textarea>\t\t\t\t\t\t\t\t\t\t\t\t<h4>' + l.settlementDisplay + ':</h4>\t\t\t\t\t\t\t\t\t\t\t\t<span class="kMp3_input click">{' + post_details.nick + '}</span>, <span class="kMp3_input click">{' + post_details.settlementName + '}</span>, <span class="kMp3_input click">{' + post_details.village + '}</span>, \t\t\t\t\t\t\t\t\t\t\t\t<span class="kMp3_input click">{' + post_details.continent + '}</span>, <span class="kMp3_input click">{' + post_details.points + '}</span><br />\t\t\t\t\t\t\t\t\t\t\t\t<textarea style="min-width: 297px; max-width: 297px; min-height: 90px; max-height: 90px;" id="kMp3_post_body">{' + post_details.std_input + '}</textarea>\t\t\t\t\t\t\t\t\t\t\t\t<h4>' + l.footer + ':</h4><textarea style="min-width: 290px; max-width: 290px;min-height: 60px; max-height: 60px; height: 60px;" id="kMp3_post_footer"></textarea>\t\t\t\t\t\t\t\t\t\t\t\t<input id="confirm_post_submit" type="submit" value="' + l.confirm + '">\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div style="line-height: 1.1; text-align: left; padding-left: 3px; width: 49%; margin: 0; float: right;">\t\t\t\t\t\t\t\t\t\t\t<h3>' + l.preview + ':</h3><span id="kMp3_post_preview"></span>\t\t\t\t\t\t\t\t\t\t\t</div></div>'),
              updatePreview(),
              $('.kMp3_input').bind('click', function () {
                $('#kMp3_post_body').val($('#kMp3_post_body').val() + $(this).html()),
                updatePreview()
              }),
              $('textarea[id*="kMp3_post_"]').keyup(function () {
                updatePreview()
              }),
              $('.kMp3-backlight').bind('click', function () {
                $('.kMp3-backlight, #kMp3_showSelectedSetts').fadeOut().remove(),
                $('.kMp3_input').unbind('click')
              }),
              $('#confirm_post_submit').bind('click', function () {
                function makePost(threadId) {
                  var single = data.shift();
                  $.ajax({
                    type: 'post',
                    url: '/forum.php?s=forum_thread&thread_id=' + threadId + '&a=forumReplyThread' + av,
                    data: 'text=' + single,
                    complete: function () {
                      data.length > 0 && makePost(threadId)
                    }
                  })
                }
                for (var top = $('#kMp3_post_top').val(), format = $('#kMp3_post_body').val(), footer = $('#kMp3_post_footer').val(), output = top + '\n' + playerName + '\n', count = 0, data = [
                ], i = 0; i < setts.length; i++) output += formatOutput(setts[i], format) + '\n',
                count++,
                (count == settsPerPosts || i == setts.length - 1) && (output += footer, data.push(output), output = top + '\n' + playerName + '\n', count = 0);
                makePost(threadId),
                $('.kMp3_overlay').click()
              })
            }
            function sortKoords(a, b) {
              var xya = a.pos.split('|'),
              xyb = b.pos.split('|'),
              a = xya[0] + xya[1],
              b = xyb[0] + xyb[1];
              return a - b
            }
            function sortKontinents(a, b) {
              var xya = a.pos.split('|'),
              xyb = b.pos.split('|'),
              a = 1000 * a.continent + (xya[0] + xya[1]),
              b = 1000 * b.continent + (xyb[0] + xyb[1]);
              return a - b
            }
            function sortSetts(setts, mode) {
              switch (mode) {
                case 'kontinent':
                  return setts.sort(sortKontinents);
                case 'points':
                  return setts.sort(function (a, b) {
                    return a.points - b.points
                  });
                case 'koords':
                  return setts.sort(sortKoords);
                default:
                  return setts
              }
            }
            if ($.kMp3('isKey', 'kMp3_thread')) {
              var thread = $.kMp3('loadKey', 'kMp3_thread'),
              threadName = thread.name,
              mode = $('input[name="kMp3_sel_setts"]:checked').val(),
              threadId = thread.id;
              playerName = $('table.borderlist').eq(2).find('tr:first').text().trim(),
              playerName = playerName.substring(playerName.indexOf(':') + 1),
              playerName = $.trim(playerName);
              var setts = [
              ];
              $('table.borderlist').eq(3).find('tr.kMp3_selected').each(function () {
                var settlementName = $(this).find('td:first > a').html(),
                xy = $(this).find('td:nth-child(2) > a').html(),
                x = parseInt10(xy.split('|') [0]),
                y = parseInt10(xy.split('|') [1]),
                k = getKontinent(xy),
                p = $(this).find('td:nth-child(3)').html();
                p = p.replace(/\./g, ''),
                setts.push({
                  pos: x + '|' + y,
                  continent: k,
                  points: p,
                  sett: settlementName,
                  nick: playerName
                })
              }),
              confirmPost(sortSetts(setts, mode), playerName, threadName, threadId, 200)
            } else window.alert(l.chooseThreadFirst + '.')
          })
        })); var troopScore = calculateTroopScore($('body')); $('table.borderlist').eq(2).append('<tr><td>' + l.trooppoints + ':</td><td>' + $.kMp3('prettyNumber', troopScore[0]) + ' (' + (troopScore[0] / troopScore[1] * 100).toFixed(2) + '%)</td></tr>')
      }
    }
  }(kMp3);
  function getUnitsInSettlement() {
    var units_dict = {
    }
    var unit_index = 0;
    var units = $('#settlement').html().split('|');
    while (unit_index + 5 < units.length) {
      units_dict[units_raw[unit_index]] = units[unit_index + 5]
      unit_index++;
    }
    return units_dict
  }
  !function (kMp3) {
    kMp3.module.infovillages = {
      matcher: page.match('s=info_village'),
      fn: function () {
          var tab = document.getElementsByClassName('resourceBar')[0];
          tab.innerHTML = tab.innerHTML + '<label><input type="checkbox" id="ataquesCiclicoskMp3" value="ataques_ciclicos"> Cíclicos</label>';
          var ataquesCiclicos = false;
          ataquesCiclicos = $.kMp3('loadKey', 'ataquesCiclicoskMp3');
          document.getElementById('ataquesCiclicoskMp3').checked = ataquesCiclicos;
          $('#ataquesCiclicoskMp3').bind('click', function () {
              $.kMp3('saveKey', 'ataquesCiclicoskMp3', document.getElementById('ataquesCiclicoskMp3').checked);
              //window.location.reload();
          });

          var encabezados = document.getElementsByClassName('noborder')[0].insertRow(-1).innerHTML = '<td style="text-align:center;"><span id="encabezado0"></span></td><td style="text-align:center;"><span id="encabezado1"></span></td><td style="text-align:center;"><span id="encabezado2"></span></td><td style="text-align:center;"><span id="encabezado3"></span></td><td style="text-align:center;"><span id="encabezado4"></span></td><td style="text-align:center;"><span id="encabezado5"></span></td><td style="text-align:center;"><span id="encabezado6"></span></td><td style="text-align:center;"><span id="encabezado7"></span></td><td style="text-align:center;"><span id="encabezado8"></span></td><td style="text-align:center;"><span id="encabezado9"></span></td><td style="text-align:center;"><span id="encabezado10"></span></td><td style="text-align:center;"><span id="encabezado11"></span></td>';
          var infoDeLaColoniaActualizada = document.getElementById("settlement").textContent; // Imprimir respuesta del archivo
          var infoDetalladaDeLaColonia = infoDeLaColoniaActualizada.split('|');
          document.getElementById('encabezado0').innerText =infoDetalladaDeLaColonia[5];
          document.getElementById('encabezado1').innerText =infoDetalladaDeLaColonia[6];
          document.getElementById('encabezado2').innerText =infoDetalladaDeLaColonia[7];
          document.getElementById('encabezado3').innerText =infoDetalladaDeLaColonia[8];
          document.getElementById('encabezado4').innerText =infoDetalladaDeLaColonia[9];
          document.getElementById('encabezado5').innerText =infoDetalladaDeLaColonia[10];
          document.getElementById('encabezado6').innerText =infoDetalladaDeLaColonia[10];
          document.getElementById('encabezado7').innerText =infoDetalladaDeLaColonia[11];
          document.getElementById('encabezado8').innerText =infoDetalladaDeLaColonia[12];
          document.getElementById('encabezado9').innerText =infoDetalladaDeLaColonia[13];
          document.getElementById('encabezado10').innerText =infoDetalladaDeLaColonia[14];
          document.getElementById('encabezado11').innerText =infoDetalladaDeLaColonia[15];
          //Inicia agregado 04/04/2022
          if (true) {
            var porMarcadar = document.querySelectorAll('.marked_group');
            var idColonia ='';
            for (let i = 0; i < porMarcadar.length; i++) {
                idColonia = porMarcadar[i].innerHTML.substring(porMarcadar[i].innerHTML.indexOf('village=') + 8, porMarcadar[i].innerHTML.indexOf('&amp;s=info'));
                if (isNaN(parseInt(idColonia))) {
                    idColonia = parseInt(porMarcadar[i].innerHTML.substring(porMarcadar[i].innerHTML.indexOf('village=') + 8, porMarcadar[i].innerHTML.lastIndexOf('&amp')));

                }
                porMarcadar[i].firstChild.text = idColonia + '-' + porMarcadar[i].firstChild.text;
                porMarcadar[i].innerHTML = '<input type="checkbox" class="seleccionados">' + porMarcadar[i].innerHTML;
                porMarcadar[i].firstChild.setAttribute('idcolonia',idColonia);
            }
            var marcados = document.querySelectorAll('.marked');
            for (let i = 0; i < marcados.length; i++) {
                if (!marcados[i].innerHTML.includes('&amp;group')) {
                    idColonia = marcados[i].innerHTML.substring(marcados[i].innerHTML.indexOf('village=') + 8, marcados[i].innerHTML.indexOf('&amp;s=info'));
                    if (isNaN(parseInt(idColonia))) {
                        idColonia = parseInt(marcados[i].innerHTML.substring(marcados[i].innerHTML.indexOf('village=') + 8, marcados[i].innerHTML.lastIndexOf('&amp')));
                    }
                    marcados[i].firstChild.text = idColonia + '-' + marcados[i].firstChild.text;
                    marcados[i].innerHTML = '<input type="checkbox" class="seleccionados" checked="checked">' + marcados[i].innerHTML;
                    marcados[i].firstChild.setAttribute('idcolonia',idColonia);

                }
            }
            var cachedTable = $('table.borderlist').eq(0);
          cachedTable.append('<tr><td class="marked_group" align="center" colspan="2"><a id="btnPasarIds" class="click">***Copiar IDS***</a></td></tr>')
        $('#btnPasarIds').bind('click', function () {
            var marcados = document.querySelectorAll('.seleccionados');
            var textoMarcados = '';
            for (let i = 0; i < marcados.length; i++) {
                if (marcados[i].checked)
                    textoMarcados = textoMarcados + marcados[i].getAttribute('idcolonia') + ';';
            }
            document.querySelector('#txtIDSVillas').value = textoMarcados;
          switchDisplay('village_drop_down');
        });
        }
        //Termina agregado 04/04/2022
        function checkForNewSession() {
          var session = $('a.widget_icon_3:first').attr('href');
          session = session.substring(session.indexOf('&p=') + 3, session.indexOf('&p=') + 7);
          var old_session = $.kMp3('loadKey', 'grac_ka_session');
          if (old_session != session) {
            $.kMp3('saveKey', 'grac_ka_session', session);
            $.kMp3('saveKey', 'grac_attack_session', null);
            return true;
          }
          else return false;
        }
        function multiSendTroops(url, num, return_url) {
          var finished = 0;
          for (var i = 0; i < num; i++) {
            var wait_time = i > 5 ? 150 * (i - 5) + 300 : 0;
            window.setTimeout(function () {
              $.ajax({
                type: 'get',
                async: true,
                url: url,
                timeout: 10000,
                complete: function () {
                  finished++;
                  if (finished == num) window.location.href = return_url;
                }
              });
            }, wait_time);
          }
        }
          function sleep(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
          }
        function multiSendTroops2(url) {
            return new Promise(function(resolve,reject){
                 $.ajax({
                    async: true,
                    type: 'get',
                    url: url,
                    timeout: 5000,
                    complete: function () {
                        resolve("done")
                    }
                    });
            })
        }
        function troopQuickMultiSendOptions(url) {
          var opts = [
            3,
            4,
            5,
            10,
            15,
            30,
            400
          ],
          str = '<span style="font-size: 75%;">[';
          for (var i = 0; i < opts.length; i++) {
            if (i > 0) str += '/';
            str += '<span name="grac_multi_send" class="click" data-url="' + url + '" data-count="' + opts[i] + '">' + opts[i] + '</span>';
          }
          str += ']</span>';
          return str;
        }
        function troopQuickSend(source, target, short_url, units_obj) {
          var unit_str = '',
          description = '',
          slowest_unit = null;
          for (var i = 0; i < Object.keys(units_obj).length; i++) {
            var unit = Object.keys(units_obj) [i],
            num = units_obj[unit].toString();
            unit_str += '&' + unit + '=' + num;
            if (i > 0) description += ' + ';
            description += num + ' ' + units_short_es[unit];
            if (slowest_unit == null || units_speed_sorted_reverse[unit] > units_speed_sorted_reverse[slowest_unit]) slowest_unit = unit;
          }
          var full_url = short_url + unit_str;
          var time = calculateTravelTimeInSeconds(source, target, slowest_unit);
          var opt = arrow + ' ';
          opt += troopQuickMultiSendOptions(full_url);
          opt += ' <a href="' + full_url + '">' + description + ' <span style="font-size: 75%;">[<span class="count-up" time="' + time + '">' + printTimeUp(time) + '</span>]</span></a> ';
          opt += '<br>';
          return opt;
        }
        var target_village_id = Query.id,
        source_village_id = Query.village,
        player = $('a[href*="info_player&"]').html(),
        stone = $('#stone').attr('start'),
        wood = $('#wood').attr('start'),
        iron = $('#iron').attr('start'),
        depo = $('#stone').attr('max'),
        safe_depo = Math.round(depo * 0.9),
        target_coords_xy = $('table.borderlist').eq(2).find('a:first').text(),
        source_coords_xy = getVillageCoords(),
        target_coords = target_coords_xy.split('|'),
        source_coords = source_coords_xy.split('|'),
        village_options,
        depo_100k = safe_depo < 100000 ? safe_depo : 100000,
        depo_200k = safe_depo < 200000 ? safe_depo : 200000,
        return_href = '/game.php?village=' + source_village_id + '&s=build_barracks' + av;
        fill_100k = [
          depo_100k - stone,
          depo_100k - wood,
          depo_100k - iron
        ],
        fill_200k = [
          depo_200k - stone,
          depo_200k - wood,
          depo_200k - iron
        ];
        if (self == player) {
          village_options = '' +
          '<a href="/game.php?village=' + target_village_id + '&s=build_barracks' + av + '">' + arrow + ' ' + l.goToBarracks + '</a><br />' +
          '<a href="/game.php?village=' + target_village_id + '&s=build_market&send_x=' + source_coords[0] + '&send_y=' + source_coords[1] + '&send_res1=' + fill_100k[1] + '&send_res2=' + fill_100k[0] + '&send_res3=' + fill_100k[2] + '&m=send&inta=send' + av + '">' + arrow + ' ' + 'Envíos de 100k' + '</a><br />' +
          '<a href="/game.php?village=' + target_village_id + '&s=build_market&send_x=' + source_coords[0] + '&send_y=' + source_coords[1] + '&send_res1=' + fill_200k[1] + '&send_res2=' + fill_200k[0] + '&send_res3=' + fill_200k[2] + '&m=send&inta=send' + av + '">' + arrow + ' ' + 'Envíos de 200k' + '</a><br />' +
          '<a href="/game.php?village=' + target_village_id + '&s=tools&m=attack_planer&target_x=' + source_coords[0] + '&target_y=' + source_coords[1] + av + '">' + arrow + ' ' + 'Agregar al planificador de ataques' + '</a><br />' +
          '<a href="/game.php?village=' + target_village_id + '&s=build_main' + av + '">' + arrow + ' ' + l.goToMain + '</a><br />';
        }
        else { // se quita el Else para que carge también si es colonia propia

          var session = getAttackSession(getVillageId(), target_coords[0], target_coords[1]);
          if (session) {
            getMarketSession(getVillageId(), target_coords[0], target_coords[1]);
            var href_short = '/game.php?village=' + source_village_id + '&s=build_barracks&m=command&a=sendTroop&p=' + session + '&send_x=' + target_coords[0] + '&send_y=' + target_coords[1] + '&attack=1' + av;
           //Agregado 31/01/2022
           var coordenadasActuales = document.getElementsByClassName('borderlist')[2].getElementsByTagName('td')[1].innerText;
           var tabled2 = $('.borderlist').eq(2);
        var buttond2 = $('<a href="game.php?village=' + source_village_id + '&s=tools&m=attack_planer&target_x=' + coordenadasActuales.split('|')[0] + '&target_y=' + coordenadasActuales.split('|')[1] + '"><img src="//s26-mx.kingsage.gameforge.com/img/arrow_right_raquo.png" alt="">&nbsp;Añadir al Planificador de Ataques</a><br>');
        tabled2.after(buttond2);

           document.getElementsByClassName('borderlist')[2].innerHTML = document.getElementsByClassName('borderlist')[2].innerHTML + '<td colspan="2"><label for="txtIDSVillas">IDs villas de origen: </label><input id="txtIDSVillas" type="text" size="53" value="' + source_village_id  + '" name="nombre"><label for="txtRecursos"> Recursos: </label><input id="txtRecursos" type="text" size="14" value=20000;18000;19000 name="nombre"><br><label for="txtEspecial">Colonias: </label><input id="txtEspecial" type="text" size="35" value="' + coordenadasActuales + '" name="nombre"><input type="radio" id="attack" name="tipo_orden" value="attack" checked><label for="attack">Atacar </label><input type="radio" id="spy" name="tipo_orden" value="espy"><label for="spy">Espiar </label><input type="radio" id="support" name="tipo_orden" value="support"><label for="support">Apoyar </label><input type="radio" id="enviarMerca" name="tipo_orden" value="mercado"><label for="enviarMerca">Merca </label><label for="txtCantidad">Cantidad: </label><input id="txtCantidad" type="text" size="1" value="1" name="cantidad"><br><label for="txtTropas">Tropas: </label><input id="txtTropas" type="text" size="85" value="&farmer=0&sword=0&spear=0&axe=0&bow=0&spy=0&light=0&heavy=0&ram=0&kata=0&snob=0&kata_target=' + k.kata_select + '" name="tipoTropa"><a id="btnEspecial" class="click"> Ejecutar </a></td>'
           document.getElementById("btnEspecial").onclick = async function () {
                var listaDeColonias = document.getElementById("txtEspecial").value
                var tipoDeTropaEnElAtaque = document.getElementById("txtTropas").value.replaceAll('&farmer=0','').replaceAll('&sword=0','').replaceAll('&spear=0','').replaceAll('&axe=0','').replaceAll('&bow=0','').replaceAll('&spy=0','').replaceAll('&light=0','').replaceAll('&heavy=0','').replaceAll('&ram=0','').replaceAll('&kata=0','').replaceAll('&snob=0','')
                var tipoDeOrden = document.querySelector('input[name="tipo_orden"]:checked').value
                if (tipoDeTropaEnElAtaque.length == 0) {
                    alert('No se encontraron cantidades en el campo de tipo de tropa')
                    return
                }
                try {
                    var numeroDeAtaques = parseInt(document.getElementById("txtCantidad").value)
                    } catch {
                        alert('Error en la cantidad, favor de revisar')
                        return
                    }
                listaDeColonias = listaDeColonias.replaceAll(' ','').replaceAll(',',';').replaceAll('.',';').replaceAll('/','|').replaceAll('-','|')
                var colonias= listaDeColonias.split(";")
                var listaDeLinks = []
                var listUrls = []
                var listadoConLasColoniasDeOrigen = document.getElementById("txtIDSVillas").value
                var coloniasDeOrigen= listadoConLasColoniasDeOrigen.replaceAll(' ','').replaceAll(',',';').replaceAll('.',';').replaceAll('/',';').replaceAll('-',';').split(";")
                var arregloConRecursos= document.getElementById("txtRecursos").value.replaceAll(' ','').replaceAll(',',';').replaceAll('.',';').replaceAll('/',';').replaceAll('-',';').split(";")
               if (tipoDeOrden == 'mercado') {
                   if (arregloConRecursos.length<3) {
                    alert('Favor de revisar las cantidades de recursos a enviar');
                    return;
                }

                try {
                    var recPiedra = parseInt(arregloConRecursos[0]);
                    var recMadera = parseInt(arregloConRecursos[1]);
                    var recMineral = parseInt(arregloConRecursos[2]);
                    var totalRecursosPorTanda = recPiedra + recMadera + recMineral;
                    if(totalRecursosPorTanda>600000) {
                        alert('La cantidad de mulas que se ocupan sobrepasan las 600 mulas, favor de revisar');
                        return;
                    } else if (totalRecursosPorTanda<1) {
                        alert('No se pueden enviar cantidades menores a 1, favor de revisar');
                        return;
                    }
                } catch {
                    alert('Se encontró un error en las cantidades de los recursos, favor de revisar');
                    return;
                }
                   document.getElementById("btnEspecial").innerHTML = '<img src="' + spinner_img_src + '" style="width: 9px; height: 9px;"></img>'
                   var lastSesionMercado = $.kMp3('loadKey', 'grac_mercado_session') || '';
                    var numeroActualDeEnvios =0;
                    var coloniaQueEnvia = 0;
                    var recursoQueTengoParaMandarEnTotal = 600000;
                    coloniasDeOrigen = coloniasDeOrigen.filter(word => word.length > 0);
                    if (coloniasDeOrigen.length>0){
                        for (let jk = 0; jk < colonias.length; jk++) {
                            if (colonias[jk].length == 7) {
                                var coords= colonias[jk].split("|");
                                numeroActualDeEnvios=0;
                                do {
                                    if(coloniaQueEnvia<coloniasDeOrigen.length) {
                                        if ( numeroActualDeEnvios < numeroDeAtaques ) {
                                            if (recursoQueTengoParaMandarEnTotal<totalRecursosPorTanda) {
                                                coloniaQueEnvia = coloniaQueEnvia +1;
                                                recursoQueTengoParaMandarEnTotal = 600000;
                                            } else {
                                                var urlParaEnviarMercado ='game.php?village=' + coloniasDeOrigen[coloniaQueEnvia] + '&s=build_market&m=send&a=marketSend&p=' + lastSesionMercado + '&send_x=' + coords[0] + '&send_y=' + coords[1] + '&send_res1=' + recMadera + '&send_res2=' + recPiedra + '&send_res3=' + recMineral;
                                                listUrls.push(urlParaEnviarMercado);
                                                numeroActualDeEnvios=numeroActualDeEnvios+1;
                                                recursoQueTengoParaMandarEnTotal=recursoQueTengoParaMandarEnTotal-totalRecursosPorTanda;
                                            }
                                        } else {
                                            break; //Sin repeticiones
                                        }
                                    } else {
                                        break; //Sin colonias que envían
                                    }
                                } while (true);
                            }
                        }
                    }
                    for (let xxx = 0; xxx < listUrls.length; xxx++) {
                        $.ajax({
                            type: 'post',
                            url: listUrls[xxx]
                        })
                        await sleep(1099);//Pasadito el segundo para evitar que  bloqueen ip
                    }

                } else {
                    document.getElementById("btnEspecial").innerHTML = '<img src="' + spinner_img_src + '" style="width: 9px; height: 9px;"></img><span id="txtMensajeCiclico"></span>'
                    for (let konta=0; konta<colonias.length; konta++) {
                        if (colonias[konta].length == 7) {
                            var coords= colonias[konta].split("|")
                            for (konta2=0; konta2<coloniasDeOrigen.length; konta2++) {
                                listaDeLinks.push('/game.php?village=' + coloniasDeOrigen[konta2] + '&s=build_barracks&m=command&a=sendTroop&p=' + session + '&send_x=' + coords[0] + '&send_y=' + coords[1] + '&' + tipoDeOrden + '=1' + tipoDeTropaEnElAtaque)
                            }
                        }
                    }
                    var url = ""
                    // Agregado para repetir cada hora los ataques
                    var continuoCadaHora = false;
                    do {
                        for (let j=0; j<listaDeLinks.length; j++) {
                            url = listaDeLinks[j]
                            for (k=0; k<numeroDeAtaques; k++) {
                                document.getElementById('txtMensajeCiclico').innerText = ' atacando ' + (j+1)  + '/' + listaDeLinks.length;
                                multiSendTroops2(url).then(function () {
                                    console.log('Listo...')
                                }).catch(function () {
                                    console.log('Error...')
                                })
                                if(url.includes('kata=1') || url.includes('kata=01')) {
                                    await sleep(300) //Tiempo de espera en milisegundos entre cada ataque
                                } else {
                                    await sleep(510) //Tiempo de espera en milisegundos entre cada ataque
                                }
                            }
                            await sleep(690) //Tiempo de espera en milisegundos entre cada colonia
                        }
                        continuoCadaHora = document.getElementById('ataquesCiclicoskMp3').checked;
                        if (continuoCadaHora) {
                            for (let j = 45; j > 0; j --) {
                                if (j == 1) {
                                    document.getElementById('txtMensajeCiclico').innerText = ' esperando 1 minuto para el siguiente ciclo';
                                } else {
                                    document.getElementById('txtMensajeCiclico').innerText = ' esperando ' + j + ' minutos para el siguiente ciclo';
                                }
                                await sleep(60000);
                            }
                        }
                    } while (continuoCadaHora);


                }
                if (tipoDeOrden == 'mercado') {
                    return_href = '/game.php?village=' + source_village_id + '&s=build_market';
                } else {
                    return_href = '/game.php?village=' + source_village_id + '&s=build_barracks';
                }
                window.location.href = return_href
            }
            href_short = '/game.php?village=' + source_village_id + '&s=build_barracks&m=command&a=sendTroop&p=' + session + '&send_x=' + target_coords[0] + '&send_y=' + target_coords[1] + '&attack=1' + av;


           //Termina lo agregado 31/01/2022

              if (depo > 100000) {
              village_options = village_options +
              troopQuickSend(source_coords_xy, target_coords_xy, href_short, {
                spy: 5
              }) +
              troopQuickSend(source_coords_xy, target_coords_xy, href_short, {
                light: 90,
                spy: 5
              }) +
              troopQuickSend(source_coords_xy, target_coords_xy, href_short, {
                farmer: 80,
                spy: 10
              }) +
              troopQuickSend(source_coords_xy, target_coords_xy, href_short, {
                ram: 1,
                spy: 10,
                farmer: 79
              }) +
              troopQuickSend(source_coords_xy, target_coords_xy, href_short, {
                ram: 1,
                spy: 10,
                axe: 79
              })
            }
            else if (depo > 50000) {
              village_options = village_options +
              troopQuickSend(source_coords_xy, target_coords_xy, href_short, {
                spy: 5
              }) +
              troopQuickSend(source_coords_xy, target_coords_xy, href_short, {
                light: 50,
                spy: 5
              }) +
              troopQuickSend(source_coords_xy, target_coords_xy, href_short, {
                farmer: 40,
                spy: 10
              }) +
              troopQuickSend(source_coords_xy, target_coords_xy, href_short, {
                ram: 1,
                spy: 10,
                farmer: 49
              }) +
              troopQuickSend(source_coords_xy, target_coords_xy, href_short, {
                ram: 1,
                spy: 10,
                axe: 49
              });
            }
            else {
              return_href = '/game.php?village=' + source_village_id + '&s=build_barracks&m=recruit' + av;
              village_options = village_options +
              troopQuickSend(source_coords_xy, target_coords_xy, href_short, {
                farmer: 3
              });
            }
          }
          else village_options = arrow + 'No seas menso, primero investiga barracas y creas tropa<br><b> Msj by Paca ©</b></br>';
        }
        var village_info = $('#main_content').find('.contentpane').eq(1).find('table.borderlist:first');
        village_info.after('<div style="float: right; width: 410px; display: inline-block; padding-left: 5px; vertical-align: top;">' + village_options + '</div>');
        $('span[name="grac_multi_send"').click(function () {
          var url = $(this).data('url'),
          count = $(this).data('count');
          $(this).replaceWith('<img src="' + spinner_img_src + '" style="width: 9px; height: 9px;"></img>');
          multiSendTroops(url, count, return_href);
        });
        //in the top // @require https://raw.githubusercontent.com/eligrey/FileSaver.js/master/FileSaver.js
        if (saveAs != undefined) {
          $('table.borderlist').eq(2).before('<div id="download">Lets download all the protection times!</div>');
        }
        $('#download').click(function () {
          alert('u sure? close tab if not!');
          $(this).replaceWith('im doing it');
          var url_base = page.substring(0, page.lastIndexOf('id=') + 3);
          var all_data = [
          ];
          var id = 0;
          var stop = false;
          while (true) {
            id++;
            $.ajax({
              type: 'get',
              async: false,
              url: url_base + id,
              timeout: 900000,
              success: function (data) {
                var date_para = $(data).find('p.error').eq(0);
                if (date_para.length > 0) {
                  var all_info = '[' + id + ']: ' + date_para.text();
                  all_data.push(all_info + '\n');
                }
                else if ($(data).find('.contentpane').eq(1).find('table.borderlist').length < 1) {
                  stop = true;
                  var blob = new Blob(all_data, {
                    type: 'text/plain;charset=utf-8'
                  });
                  saveAs(blob, 'grac_protection_times.txt');
                }
                else {
                  var all_info = '[' + id + ']: No protection.';
                  all_data.push(all_info + '\n');
                }
              }
            });
            if (stop) break;
          }
        });
      }
    }
  }(kMp3);
  !function (kMp3) {
    kMp3.module.main = {
      matcher: page.match('s=build_main'),
      fn: function () {
        var destroyText = $('a[href*="m=destroy"]').text(),
        tableCount = $('table.borderlist'),
        isModernView = $('div.mainBuildList, div.mainBuildModern').length;
        if (tableCount.length == 6 - isModernView) {
          var buildList = tableCount.eq(2),
          destroyList = $.makeArray(buildList.find('tr > td').parent().filter(function () {
            return $(this).find('td:first').text().match(destroyText)
          }));
          destroyList.length > 0 && '' != destroyText && (buildList.before('<span class="click" id="kMp3_cancelAllDestroy">(kMp3) ' + l.cancelAllDestroy + '</span><br />'), $('#kMp3_cancelAllDestroy').bind('click', function () {
            function cancelDestroy(destroyList, callback) {
              var that = $(destroyList.shift()),
              link = that.find('a[href*="cancelBuilding"]').attr('href');
              $.ajax({
                type: 'post',
                url: link,
                success: function () {
                  that.kMp3('fadeOutRemove'),
                  0 == destroyList.length && 1 == buildList.length ? buildList.kMp3('fadeOutRemove')  : callback(destroyList, callback)
                }
              })
            }
            $(this).kMp3('fadeOutRemove'),
            cancelDestroy(destroyList, cancelDestroy)
          }))
        }
        var grac_auto_build_queue = {
          stone: false,
          iron: false,
          wood: false,
          farm: false,
          main: false,
          storage: false,
          hide: false,
          barracks: false,
          wall: false,
          stable: false,
          market: false,
          garage: false,
          snob: false,
          smith: false,
          statue: false
        };
        var grac_build_res = {
        };
        var auto_build_interval = 5000;
        function loadBuildQueue() {
          var loaded_grac_auto_build = {
          };
          if ($.kMp3('isKey', 'grac_auto_build')) loaded_grac_auto_build = $.kMp3('loadKey', 'grac_auto_build');
          return loaded_grac_auto_build
        }
        function loadVillageBuildQueue() {
          var village = getVillageId();
          var loaded_grac_auto_build = loadBuildQueue();
          var new_grac_auto_build = {
          };
          if (loaded_grac_auto_build[village]) new_grac_auto_build = loaded_grac_auto_build[village];
          return new_grac_auto_build;
        };
        function saveVillageBuildQueue() {
          var village = getVillageId();
          var saved = loadBuildQueue();
          saved[village] = grac_auto_build_queue;
          $.kMp3('saveKey', 'grac_auto_build', saved);
        };
        function getBuildSession() {
          if (window.location.href.indexOf('&a=buildBuilding') > 0) {
            window.location.href = window.location.href.substring(0, window.location.href.indexOf('&a=buildBuilding'));
          }
          var build_link = $('a[href*="&s=build_main&a=buildBuilding"]');
          if (build_link.length < 1) return '99ac';
          var href = $('a[href*="&s=build_main&a=buildBuilding"]').attr('href');
          var session = href.substring(href.indexOf('&p=') + 3, href.indexOf('&p=') + 7);
          return session
        };
        function checkAutoBuild() {
          var auto_buildings = 0;
          for (var building in grac_auto_build_queue) {
            if (grac_auto_build_queue[building]) auto_buildings++;
          }
          if (auto_buildings == 0) return;
          var under_construction = $('body').find('a[href*="cancelBuilding"]');
          var under_construction_count = under_construction.length;
          if (!premium && under_construction_count > 2) return;
          var prev_constructed;
          if (under_construction_count > 0) {
            prev_constructed = under_construction.eq(0).parent().parent().find('img:first').attr('src');
            prev_constructed = prev_constructed.substring(prev_constructed.indexOf('buildings/') + 10, prev_constructed.indexOf('.png'))
          }
          var stone = parseInt10($('#stone').text().replace('.', ''));
          var wood = parseInt10($('#wood').text().replace('.', ''));
          var iron = parseInt10($('#iron').text().replace('.', ''));
          var workers = parseInt10($('div.freeSettlers > span').text().replace('.', ''));
          for (var build in grac_auto_build_queue) {
            if (grac_auto_build_queue[build]) {
              if (auto_buildings > 1 && build == prev_constructed) continue;
              var building_res = grac_build_res[build];
              if (stone > building_res[0] && wood > building_res[1] && iron > building_res[2] && workers > building_res[3]) {
                window.location.href = building_res[4];
                break;
              }
            }
          }
        };
        var buildListUi = $('div.mainBuildList');
        if (!buildListUi.length) buildListUi = $('div.mainBuildModern');
        if (!buildListUi.length) buildListUi = $('td.shadow');
        buildListUi.find('a[href*="&s=build"]').not('[href*="buildBuilding"]').each(function () {
          var self = $(this);
          var row = self.parent().parent();
          var href = self.attr('href');
          var building = href.substring(href.indexOf('&s=build_') + 9);
          if (building.indexOf('&') > 0) var building = building.substring(0, building.indexOf('&'));
          var village = getVillageId();
          var stone;
          var wood;
          var iron;
          var workers;
          if (isModernView) {
            stone = parseInt10(row.find('span').eq(1).text().replace('.', ''));
            wood = parseInt10(row.find('span').eq(0).text().replace('.', ''));
            iron = parseInt10(row.find('span').eq(2).text().replace('.', ''));
            workers = parseInt10(row.find('span').eq(3).text().replace('.', ''));
          }
          else {
            stone = parseInt10(row.find('span').eq(0).text().replace('.', ''));
            wood = parseInt10(row.find('span').eq(1).text().replace('.', ''));
            iron = parseInt10(row.find('span').eq(2).text().replace('.', ''));
            workers = parseInt10(row.find('span').eq(3).text().replace('.', ''));
          }
          var session = getBuildSession();
          var href_build = '/game.php?village=' + village + '&s=build_main&a=buildBuilding&p=' + session + '&build=' + building + av;
          grac_build_res[building] = [
            stone,
            wood,
            iron,
            workers,
            href_build
          ];
          grac_auto_build_queue = loadVillageBuildQueue();
          var img_src = grac_auto_build_queue[building] ? '/img/dots/green.png' : '/img/dots/red.png';
          if (stone > 0) {
            self.before('<img name="grac_auto_build" class="click" src="' + img_src + '" style="width: 8px; height: 8px;" data-building="' + building + '"> ');
          }
          else {
            self.before('<img src="/img/dots/red.png" style="width: 8px; height: 8px;"> ');
          }
        })
        setInterval(checkAutoBuild, auto_build_interval);
        setTimeout(function () {
          location.reload();
        }, 400000);
        $('img[name="grac_auto_build"]').click(function () {
          var self = $(this);
          var building = self.data('building');
          var src;
          if (grac_auto_build_queue[building]) {
            grac_auto_build_queue[building] = false;
            src = '/img/dots/red.png';
          }
          else {
            grac_auto_build_queue[building] = true;
            src = '/img/dots/green.png';
          }
          self.attr('src', src);
          saveVillageBuildQueue();
        });
        if (k.modul.massbuild && premium) {
          var buildCosts = {
            main: {
              min: 1,
              max: 50,
              stone: {
                b: 85,
                f: 1.17
              },
              wood: {
                b: 70,
                f: 1.165
              },
              ore: {
                b: 65,
                f: 1.165
              },
              workers: {
                b: 2,
                f: 1.12
              }
            },
            wood: {
              min: 0,
              max: 50,
              stone: {
                b: 55,
                f: 1.17
              },
              wood: {
                b: 30,
                f: 1.165
              },
              ore: {
                b: 40,
                f: 1.165
              },
              workers: {
                b: 5,
                f: 1.1
              }
            },
            stone: {
              min: 0,
              max: 50,
              stone: {
                b: 40,
                f: 1.17
              },
              wood: {
                b: 30,
                f: 1.165
              },
              ore: {
                b: 55,
                f: 1.165
              },
              workers: {
                b: 5,
                f: 1.1
              }
            },
            iron: {
              min: 0,
              max: 50,
              stone: {
                b: 55,
                f: 1.17
              },
              wood: {
                b: 40,
                f: 1.165
              },
              ore: {
                b: 30,
                f: 1.165
              },
              workers: {
                b: 5,
                f: 1.1
              }
            },
            storage: {
              min: 1,
              max: 50,
              stone: {
                b: 43,
                f: 1.17
              },
              wood: {
                b: 40,
                f: 1.165
              },
              ore: {
                b: 35,
                f: 1.165
              },
              workers: {
                b: 0.1,
                f: 1.1
              }
            },
            hide: {
              min: 0,
              max: 30,
              stone: {
                b: 50,
                f: 1.17
              },
              wood: {
                b: 40,
                f: 1.165
              },
              ore: {
                b: 40,
                f: 1.165
              },
              workers: {
                b: 1,
                f: 1.15
              }
            },
            farm: {
              min: 1,
              max: 50,
              stone: {
                b: 65,
                f: 1.17
              },
              wood: {
                b: 50,
                f: 1.165
              },
              ore: {
                b: 50,
                f: 1.16
              },
              workers: {
                b: 0,
                f: 1
              }
            },
            barracks: {
              min: 0,
              max: 30,
              stone: {
                b: 180,
                f: 1.23
              },
              wood: {
                b: 180,
                f: 1.21
              },
              ore: {
                b: 120,
                f: 1.22
              },
              workers: {
                b: 6,
                f: 1.17
              }
            },
            wall: {
              min: 1,
              max: 20,
              stone: {
                b: 60,
                f: 1.17
              },
              wood: {
                b: 40,
                f: 1.165
              },
              ore: {
                b: 30,
                f: 1.16
              },
              workers: {
                b: 4,
                f: 1.2
              }
            },
            stable: {
              min: 0,
              max: 30,
              stone: {
                b: 240,
                f: 1.17
              },
              wood: {
                b: 200,
                f: 1.165
              },
              ore: {
                b: 220,
                f: 1.16
              },
              workers: {
                b: 10,
                f: 1.1
              }
            },
            market: {
              min: 0,
              max: 30,
              stone: {
                b: 100,
                f: 1.17
              },
              wood: {
                b: 80,
                f: 1.165
              },
              ore: {
                b: 70,
                f: 1.16
              },
              workers: {
                b: 10,
                f: 1.17
              }
            },
            garage: {
              min: 0,
              max: 5,
              stone: {
                b: 400,
                f: 1.17
              },
              wood: {
                b: 600,
                f: 1.165
              },
              ore: {
                b: 500,
                f: 1.16
              },
              workers: {
                b: 50,
                f: 1.4
              }
            },
            snob: {
              min: 0,
              max: 10,
              stone: {
                b: 30000,
                f: 1.3
              },
              wood: {
                b: 25000,
                f: 1.3
              },
              ore: {
                b: 25000,
                f: 1.3
              },
              workers: {
                b: 100,
                f: 1.2
              }
            },
            smith: {
              min: 0,
              max: 5,
              stone: {
                b: 4000,
                f: 1.4
              },
              wood: {
                b: 3000,
                f: 1.4
              },
              ore: {
                b: 2500,
                f: 1.4
              },
              workers: {
                b: 25,
                f: 1.2
              }
            },
            statue: {
              min: 0,
              max: 1,
              stone: {
                b: 400000,
                f: 2
              },
              wood: {
                b: 400000,
                f: 2
              },
              ore: {
                b: 400000,
                f: 2
              },
              workers: {
                b: 0,
                f: 1.17
              }
            },
            cost: function (building, level) {
              var stone = 0,
              wood = 0,
              ore = 0,
              workers = 0;
              return 'number' == typeof level && level <= building.max && level >= building.min && (stone = Math.round(building.stone.b * Math.pow(building.stone.f, level - 1)), wood = Math.round(building.wood.b * Math.pow(building.wood.f, level - 1)), ore = Math.round(building.ore.b * Math.pow(building.ore.f, level - 1)), workers = Math.round(building.workers.b * Math.pow(building.workers.f, level - 1))),
              [
                stone,
                wood,
                ore,
                workers
              ]
            },
            cumulatedCost: function (building, min, max) {
              for (var stone = 0, wood = 0, ore = 0, workersLow = this.cost(building, min) [3], workersHigh = this.cost(building, max) [3], i = min + 1; max >= i; i++) cost = this.cost(building, i),
              stone += cost[0],
              wood += cost[1],
              ore += cost[2];
              return [stone,
              wood,
              ore,
              workersHigh - workersLow]
            },
            getMaximumLevel: function (building, level, stone, wood, iron, workers) {
              var max = building.max,
              min = level,
              available = [
                stone,
                wood,
                iron,
                workers
              ],
              canBuild = function (cumulated, available) {
                return cumulated[0] <= available[0] && cumulated[1] <= available[1] && cumulated[2] <= available[2] && cumulated[3] <= available[3]
              },
              addCost = function (n, o) {
                return [n[0] + o[0],
                n[1] + o[1],
                n[2] + o[2],
                n[3]]
              },
              maxCost = this.cumulatedCost(building, min, max);
              if (canBuild(maxCost, available)) return [max - min].concat(maxCost);
              for (var high = max - 1, low = min, lowCost = this.cumulatedCost(building, low, low + 1), lastCost = lowCost, i = low + 1; high >= low; i++) {
                var tmpCost = addCost(this.cost(building, i), lastCost);
                if (!canBuild(tmpCost, available)) return [i - low].concat(lastCost);
                lastCost = tmpCost
              }
            }
          };
          $('a[href*="&s=build_main&a=buildBuilding"]').each(function () {
            var current = $(this),
            row = current.parent().parent(),
            level = parseInt(current.text().match(/\d{1,2}/), 10) - 1 || 0,
            building = current.attr('href');
            building = $.kMp3('getUrlParameters', building).build;
            var stone,
            wood,
            ore,
            workers,
            link,
            modernStyling = isModernView > 0 ? 'style="color: #F7D48E;" ' : '',
            maximumLevel = buildCosts.getMaximumLevel(buildCosts[building], level, $('#stone').text().replace('.', ''), $('#wood').text().replace('.', ''), $('#iron').text().replace('.', ''), $('a[href*="&s=build_farm"]:first').parent().find('span').text().replace('.', '')),
            data = row.find('td');
            0 == data.length ? (stone = row.find('.res2'), wood = row.find('.res1'), ore = row.find('.res3'), workers = row.find('.workers'), link = row.find('.button'))  : (stone = data.eq(1), wood = data.eq(2), ore = data.eq(3), workers = data.eq(4), link = data.eq(6)),
            stone = stone.find('span').text($.kMp3('prettyNumber', maximumLevel[1])),
            wood = wood.find('span').text($.kMp3('prettyNumber', maximumLevel[2])),
            ore = ore.find('span').text($.kMp3('prettyNumber', maximumLevel[3])),
            workers = workers.find('span').text($.kMp3('prettyNumber', maximumLevel[4]));
            var replacement = '<a ' + modernStyling + 'href="' + current.attr('href') + '">' + l.buildOne + '</a> ';
            replacement += '<input type="text" maxlength="2" style="width: 17px;" data-max="' + maximumLevel[0] + '" class="kMp3_buildLevels" value="' + maximumLevel[0] + '"> ',
            replacement += '<span ' + modernStyling + 'class="click kMp3_massbuild" data-url="' + current.attr('href') + '">' + l.buildMax + '</span>',
            current.replaceWith(replacement)
          }),
          $('.contentpane').on('click', '.kMp3_massbuild', function () {
            var url = $(this).data('url');
            max = $(this).siblings('input').data('max'),
            levels = $(this).siblings('input').val(),
            levels = levels > max ? max : levels;
            for (var i = 0; levels > i; i++) $.kMp3('queue', {
              type: 'post',
              url: url,
              success: function (data) {
                $('.borderlist').eq(2).replaceWith($(data).find('.borderlist').eq(2));
                $('.borderlist').eq(3).replaceWith($(data).find('.borderlist').eq(3));
              }
            })
          })
        }
      }
    }
  }(kMp3);
  css += '#kMp3_show_attack_info { position: fixed; z-index: 150; box-shadow: 1px 1px 5px #000; display: none; top: 5px; left: 5px; min-width: 250px; max-width: 350px; background-color: #fff; opacity: .9; }',
  css += '#kMp3_errorbox { position: fixed; width: 500px; z-index: 150; box-shadow: 1px 1px 5px rgb(0, 0, 0); line-height: 1.2; text-align: left; padding:5px; top: 25px; left: 25px; color: #fff; font-size: 11pt; background-color: #871919; }',
  css += '.kMp3_hastroops { position: absolute; padding: 1px; border: 1px solid black; width: 10px; height: 9px; line-height: 8px; font-weight: bold; }',
  css += '#kMp3_box { background-color: #fff; display: none; border-radius: 5px; position: fixed; width: 500px; left: 50%; top: 5%; margin-left: -250px; padding: 6px; z-index: 200; }',
  function (kMp3) {
    kMp3.module.map = {
      matcher: page.match('s=map'),
      fn: function () {
        function mapStateChanges() {
            var lugaresDisponibles = document.querySelectorAll('.free');
            document.querySelector('#mapContainer').append('Lugares disponibles: ' + lugaresDisponibles.length);
            for(let i = 0; i< lugaresDisponibles.length; i++) {
                lugaresDisponibles[i].firstChild.firstChild.style.opacity = '0.85';
                lugaresDisponibles[i].firstChild.style.backgroundColor = 'rgb(201, 248, 206)';
            }
          $('td[class*="occupied"] > div > a').each(function () {
            function hasTroops(troops, units, amount) {
              var result = !1,
              unit_1 = units[0],
              unit_2 = units[1];
              return 12 == parseInt10(unit_2) ? parseInt10(troops[unit_1].replace(/\./g, '')) > amount[0] - 1 && (result = !0)  : parseInt10(troops[unit_1].replace(/\./g, '')) > amount[0] - 1 && parseInt10(troops[unit_2].replace(/\./g, '')) > amount[1] - 1 && (result = !0),
              result
            }
            function drawTroops(elem, troops, modules, pos) {
              for (var m in modules) modules.hasOwnProperty(m) && modules[m] && hasTroops(troops, [
                k.units[m].one.unit,
                k.units[m].two.unit
              ], [
                k.units[m].one.amount,
                k.units[m].two.amount
              ]) && elem.append('<div class="kMp3_hastroops" style="background-color: ' + k.units[m].color + '; color: ' + draw.helper.getContrast(k.units[m].color.substring(1)) + '; top: ' + pos[m].top + '; right: ' + pos[m].right + ';">' + k.units[m].abbr + '</div>')
            }
            function isSettlementInGroup(meta, groups) {
              var result = !1;
              if (0 != Object.getOwnPropertyNames(groups).length) for (var item in groups) if ( - 1 != meta.indexOf(groups[item])) {
                result = !0;
                break
              }
              return result
            }
            var meta = $(this).parent().html();
            meta = meta.substring(meta.indexOf('onmouseover'), meta.indexOf('onmouseout') - 1);
            var metaSplit = meta.split(','),
            village = $(this).attr('href');
            village = village.substring(village.lastIndexOf('id=') + 3),
            '' != av && (village = village.replace(av, ''));
            var playerName = metaSplit[3].substr(2, metaSplit[3].indexOf(' (') - 2),
            isThisMe = self.match(playerName) && '' != playerName;
            if (k.modul.troopsOnMap && isThisMe && mapOptionActivated) {
              var troops = metaSplit[metaSplit.length - 4];
              troops = troops.substring(2, troops.length - 1),
              troops = troops.split(':'),
              drawTroops($(this), troops, k.units.modul, {
                def: {
                  top: '2px',
                  right: '2px'
                },
                off: {
                  top: '2px',
                  right: '15px'
                },
                count: {
                  top: '14px',
                  right: '2px'
                },
                spy: {
                  top: '14px',
                  right: '15px'
                }
              })
            }
            if (k.modul.highlightgroups && isThisMe) if (isSettlementInGroup(meta, k.highlightgroups.one.group) && $(this).attr('kMp3_g_one', k.highlightgroups.one.name), isSettlementInGroup(meta, k.highlightgroups.two.group) && $(this).attr('kMp3_g_two', k.highlightgroups.two.name), $(this).attr('kMp3_g_one') && $(this).attr('kMp3_g_two')) $(this).append('<div style="position: absolute; padding: 1px; border-radius: 5px; border: 1px solid black; background-color: #FF7F50;  bottom: 2px; left: 2px; width: 5px; height: 5px;"></div>');
             else {
              var cssMapGroups = 'position: absolute; padding: 1px; border-radius: 3px; bottom: 0px; left: 0px;';
              $(this).attr('kMp3_g_one') && $(this).append('<div style="' + cssMapGroups + ' background-color:' + k.highlightgroups.one.color + '; color: ' + draw.helper.getContrast(k.highlightgroups.one.color.substring(1)) + ';"><span>' + $(this).attr('kMp3_g_one') + '</span></div>'),
              $(this).attr('kMp3_g_two') && $(this).append('<div style="' + cssMapGroups + ' background-color:' + k.highlightgroups.two.color + '; color: ' + draw.helper.getContrast(k.highlightgroups.two.color.substring(1)) + ';"><span>' + $(this).attr('kMp3_g_two') + '</span></div>')
            }
            k.modul.showAttacksOnMap && saved_attacks && attacks.hasOwnProperty(village) && $(this).attr('kMp3_villageId', village).parent().parent().attr('attacked', 'true')
          })
        }
        var mapOptionActivated = mapOptionActivated = 'checked' == $('input[name="map_show_troups"]').attr('checked') ? !0 : !1;
        if (k.modul.troopsOnMap && !mapOptionActivated) {
          $('body').append('<div id="kMp3_errorbox"></div>'),
          $('#kMp3_errorbox').html(0 == $('input[name="map_show_troups"]').length ? l.highlighttroopsError : l.highlighttroopsActivate)
        }
        if (k.modul.showAttacksOnMap) {
          var saved_attacks = !1,
          attacks = {
          };
          $.kMp3('isKey', 'kMp3_save_attacks') && (saved_attacks = !0, attacks = $.kMp3('loadKey', 'kMp3_save_attacks'), filterOverdueAttacks(attacks))
        }
        $(document).ready(function () {
          function showAttackInformation(villageId) {
            function moreAttacks() {
              return 0 == len ? l.none : len
            }
            function showNextTwenty() {
              var o;
              if (len < 1) return '';
              o = '<span style="text-align: center;" id="kMp3_show_all">' + printf(l.nextAttacks, size) + '</span><table>';
              for (var i = 1; i < size + 1; i++) {
                var attack_info = village_attacks[i];
                var y = printTimeUpToTimestamp(attack_info[6] * 1000);
                o += '<tr><td><a href="/game.php?s=info_player&id=' + attack_info[1] + av + '" target="_blank">' + attack_info[0] + '</a></td>',
                o += '<td><a href="/game.php?s=info_village&id=' + attack_info[3] + av + '" target="_blank">' + attack_info[2] + '</a></td><td><b>' + attack_info[7] + '</b></td><td>' + y + '</td></tr>'
              }
              return o += '</table>'
            }
            var village_attacks = attacks[villageId],
            len = village_attacks.length - 1,
            attack_single = village_attacks[0],
            time = attack_single[6],
            n = attack_single[7];
            time = printTimeUpToTimestamp(time * 1000);
            var size = Math.min(len, 20);
            $('#kMp3_show_attack_info').find('td[id*="n"]').html('<b>' + n + '</b>').end().find('td[id*="p"]').html('<a href="/game.php?s=info_player&id=' + attack_single[1] + av + '" target="_blank">' + attack_single[0] + '</a>').end().find('td[id*="v"]').html('<a href="/game.php?s=info_village&id=' + attack_single[3] + av + '" target="_blank">' + attack_single[2] + '</a>').end().find('td[id*="a"]').html('<a href="/game.php?s=info_ally&id=' + attack_single[5] + av + '" target="_blank">' + attack_single[4] + '</a>').end().find('td[id*="t"]').html(time).end().find('td[id*="m"]').html(moreAttacks()).end().find('td[id*="s"]').attr('villageId', villageId).end().find('td[id*="s"]').html(showNextTwenty()).end().fadeIn('slow')
          }
          function pulse(element) {
            $(element).fadeOut(700).fadeIn(700),
            setTimeout(function () {
              pulse(element)
            }, 800)
          }
          if (mapStateChanges(), $('td[title], div[id*="minimap"]').live('click', mapStateChanges), k.modul.showAttacksOnMap && ($('body').append('<div id="kMp3_show_attack_info">\t\t\t\t\t\t<table>\t\t\t\t\t\t\t<tr><td id="n"></td><td align="right"><span class="click kMp3_mark" id="kMp3_close_attack_info">' + l.close + '</span></td></tr>\t\t\t\t\t\t\t<tr><td colspan="2"><u>' + l.attacker + '</u></td></tr>\t\t\t\t\t\t\t<tr><td>' + l.nick + ': </td><td id="p"></td></tr><tr><td>' + l.settlement + ': </td><td id="v"></td></tr>\t\t\t\t\t\t\t<tr><td>' + l.ally + ': </td><td id="a"></td></tr><tr><td>' + l.arrival + ': </td><td id="t"></td></tr>\t\t\t\t\t\t\t<tr><td>' + l.moreAttacks + ': </td><td id="m"></td></tr><tr><td id="s" colspan="2"></td></tr>\t\t\t\t\t\t</table></div>'), pulse('td[attacked*="true"]'), $('td[attacked*="true"]').live('mouseover', function () {
            showAttackInformation($(this).find('a').attr('kMp3_villageid'))
          }), $('#kMp3_close_attack_info').bind('click', function () {
            $('#kMp3_show_attack_info').fadeOut()
          })), k.modul.targetExport && ($('#mapContainer').parent().before('<form action="javascript:void(0);">' + l.player + ': <input type="text" id="kMp3_target"> <input type="checkbox" id="kMp3_onlyAbandoned"> ' + l.onlyAbandoned + '<input type="checkbox" id="kMp3_showAsMessage"> ' + l.asBBCode + ' <input type="submit" value="(kMp3) ' + l.targetExport + '" id="kMp3_targetExportSubmit"> <span id="kMp3_targetExport_error" style="color: crimson; font-weight: bold; display: none;"></span></form><br />'), $('#kMp3_targetExportSubmit').click(function () {
            var results = [
            ],
            target = $('#kMp3_target').val(),
            onlyAbandoned = 1 == $('#kMp3_onlyAbandoned:checked').length;
            $('td[class*="occupied"] > div > a').each(function () {
              var meta = $(this).attr('onmouseover'),
              metaSplit = meta.split(','),
              user = metaSplit[3],
              coordinates = meta.match(/\d+\|\d+/),
              isAbandoned = $(this).find('img').attr('src').match(/_left.png$/);
              onlyAbandoned ? isAbandoned && results.push(coordinates)  : null != user.match(target) && results.push(coordinates)
            });
            var displayDataAsBBCode = function (data) {
              var r = data.length + ' ' + l.entries + ' \n';
              for (var i in data) data.hasOwnProperty(i) && (r += '[village]' + data[i] + '[/village] \n');
              return r.substring(0, r.length - 2)
            },
            displayDataAsList = function (data) {
              var r = data.length + ' ' + l.entries + ' \n';
              for (var i in data) data.hasOwnProperty(i) && (r += '"' + data[i] + '",\n');
              return r.substring(0, r.length - 2)
            };
            if (results.length > 0) {
              1 == $('#kMp3_targetExport_error:visible').length && $('#kMp3_targetExport_error').fadeOut();
              var creator = 1 == $('#kMp3_showAsMessage:checked').length ? displayDataAsBBCode : displayDataAsList;
              $.kMp3('genericBBCode', creator, results)
            } else $('#kMp3_targetExport_error').text(l.noMatch + '.').fadeIn()
          })), k.modul.setGroupsOnMap && premium) {
            var groups = $.makeArray($('#container_group_drop_down').find('a:gt(0)')).map(function (t) {
              return {
                id: $.kMp3('getUrlParameters', $(t).attr('href')).group,
                name: $(t).text()
              }
            }),
            options = groups.map(function (i) {
              return '<option value="' + i.id + '">' + i.name + '</option>'
            });
            $('#mapContainer').parent().before('<div id="kMp3_setGroupsOnMap"><select id="kMp3_setGroupsOnMap_select">' + options.join() + '</select> <input type="submit" id="kMp3_setGroupsOnMap_submit" value="' + l.setGroup + '"> <span id="kMp3_setGroupsOnMap_success" style="display: none; font-weight: bold;">' + l.saved + '</span></div><br />'),
            $('#kMp3_setGroupsOnMap_submit').click(function () {
              var allGroup = $('#group_drop_down').find('table tr td').eq(0);
              if (allGroup.hasClass('marked')) {
                $('#kMp3_setGroupsOnMap_saved').remove();
                var groupID = $('#kMp3_setGroupsOnMap_select').val(),
                settlements = [
                ],
                o = 0,
                n = 0,
                getVillagesOfGroup = function (groupID) {
                  return $.ajax({
                    type: 'post',
                    url: 'popup.php?s=groups&group_id=' + groupID + av
                  })
                };
                $.when(getVillagesOfGroup(groupID)).then(function (raw) {
                  selectedSetts = $(raw).find('input:checked'),
                  selectedSetts.each(function () {
                    settlements.push($(this).val())
                  }),
                  o = settlements.length,
                  $('td[class*="occupied"] > div > a').each(function () {
                    var meta = $(this).attr('onmouseover'),
                    user = meta.split(',') [3],
                    id = $.kMp3('getUrlParameters', $(this).attr('href')).id;
                    user.match(self) && - 1 == settlements.indexOf(id) && settlements.push(id)
                  }),
                  n = settlements.length,
                  n != o ? $.ajax({
                    type: 'post',
                    url: 'popup.php?s=groups&m=define&inta=modifyVillageGroups&group_id=' + groupID + av,
                    data: 'vg[]=' + settlements.join('&vg[]='),
                    success: function () {
                      $('#kMp3_setGroupsOnMap_success').css({
                        color: 'green'
                      }).kMp3('fadeInfadeOut').before('<span id="kMp3_setGroupsOnMap_saved" class="kMp3-icons kMp3-icon-saved"></span>')
                    }
                  })  : $('#kMp3_setGroupsOnMap_success').css({
                    color: 'green'
                  }).kMp3('fadeInfadeOut').before('<span id="kMp3_setGroupsOnMap_saved" class="kMp3-icons kMp3-icon-saved"></span>')
                })
              } else confirm(l.switchGroup) && (location.href = allGroup.find('a').attr('href'))
            })
          }
        })
      }
    }
  }(kMp3);
  !function (kMp3) {
    kMp3.module.market = {
      matcher: k.modul.marketOptions && page.match('s=build_market') && !page.match('inta') && identifyActiveTab('s=build_market&m=send'),
      fn: function () {
        function calculateRes(avail_donkeys, avail_res, wanted_res) {
          var out = [
          ],
          sum = parseInt10(wanted_res[0]) + parseInt10(wanted_res[1]) + parseInt10(wanted_res[2]);
          if (sum <= 1000 * parseInt10(avail_donkeys)) for (var i = 0; 3 > i; i++) out.push(parseInt10(avail_res[i]) > parseInt10(wanted_res[i]) ? wanted_res[i] : avail_res[i]);
           else for (var donkeys = 1000 * parseInt10(avail_donkeys), scale = donkeys / sum, i = 0; 3 > i; i++) out.push(parseInt10(avail_res[i]) > parseInt10(parseInt10(wanted_res[i]) * scale) ? parseInt10(parseInt10(wanted_res[i]) * scale)  : avail_res[i]);
          $('input[name*="send_res"]').kMp3('multiCheckBoxes', out)
        }
        function createOptions(market) {
          var o = '';
          for (var opt in market) market.hasOwnProperty(opt) && 'd3fault' != opt && (o += ' <span id="kMp3_market_' + opt + '" opt="' + opt + '" class="click kMp3_mark">' + arrow + ' ' + market[opt].name + '</span>');
          return o
        }
        var avail_res = [
        ];
        if ($.kMp3('isKey', 'kMp3_lastMarketTarget') && '' == $('input[id="send_x"], input[id="send_y"]').val()) {
          var lastTarget = $.kMp3('loadKey', 'kMp3_lastMarketTarget');
          lastTarget = lastTarget.split('|'),
          $('input[id="send_x"]').val(lastTarget[0]),
          $('input[id="send_y"]').val(lastTarget[1])
        }
        $('input[type="submit"]').click(function () {
          var target = $('input[id="send_x"]').val() + '|' + $('input[id="send_y"]').val();
          $.kMp3('saveKey', 'kMp3_lastMarketTarget', target)
        }),
        $('table[class*="borderlist"]').eq(3).find('span').each(function () {
          avail_res.push($(this).text().replace(/[\(\)\.]/g, ''))
        });
        var avail_donkeys = $('table[class*="borderlist"]').eq(2).find('tr').eq(1).find('td').eq(0).text();
        avail_donkeys = avail_donkeys.match(/(\d+)/) [0],
        calculateRes(avail_donkeys, avail_res, [
          k.market[k.market.d3fault].stone,
          k.market[k.market.d3fault].wood,
          k.market[k.market.d3fault].iron
        ]),
        $('table[class*="borderlist"]').eq(3).append('<tr><td colspan="3"><span id="kMp3_market_all"  opt="0" class="click kMp3_mark">' + arrow + ' ' + l.all + '</span>' + createOptions(k.market) + '</tr>'),
        $('span[id*="kMp3_market_"]').bind('click', function () {
          var wanted_res = [
          ],
          opt = $(this).attr('opt');
          switch (opt) {
            case '0':
              wanted_res.push('950000', '950000', '950000');
              break;
            default:
              wanted_res.push(k.market[opt].stone, k.market[opt].wood, k.market[opt].iron)
          }
          calculateRes(avail_donkeys, avail_res, wanted_res)
        })
      }
    }
  }(kMp3);
  css += '#bb_code { word-wrap: break-word; overflow-wrap: break-word; }',
  function (kMp3) {
    kMp3.module.messages = {
      matcher: page.match('s=messages'),
      fn: function () {
        function forward(type, details, nick) {
          var url,
          data;
          switch (type) {
            case 'report':
              url = 'game.php?s=messages&m=all&a=reportForward&p=' + details.p + '&id=' + details.id,
              data = 'report_to=' + nick;
              break;
            case 'message':
              url = details.url,
              data = 'msg_to=' + nick + '&confbox=on&' + details.data
          }
          $.ajax({
            type: 'post',
            url: url + av,
            data: data
          })
        }
        if (page.match('&id')) {
          var returnBBCodeForImage = function (a, match) {
            var type = match.substring(match.lastIndexOf('/') + 1, match.lastIndexOf('.')),
            result = '';
            if (type.indexOf('res') > - 1) switch (type) {
              case 'res2':
                result = '[img_stone]';
                break;
              case 'res1':
                result = '[img_wood]';
                break;
              case 'res3':
                result = '[img_iron]'
            } else result = type.indexOf('unit') > - 1 ? '[img' + type.substring(type.lastIndexOf('_')) + ']' : match.indexOf('buildings') > - 1 ? '[img_build_' + match.substring(match.lastIndexOf('/') + 1, match.lastIndexOf('.')) + ']' : '[img]' + match + '[/img]';
            return result
          },
          regex = new RegExp(/\[img](.*?)\[\/img]/gi),
          $bbCode = $('#bb_code');
          $bbCode.prevAll('.borderlist:first').find('tr:last > td').append(' ' + arrow + ' <span id="kMp3_report_as_bb_code" class="click">(kMp3) ' + l.report_as_bb_code + '</span>'),
          $('#kMp3_report_as_bb_code').click(function () {
            bb = $bbCode.html(),
            bb = bb.replace(regex, returnBBCodeForImage),
            $bbCode.html(bb).show()
          })
        } else if (identifyActiveTab('s=messages&m=in') && (css += '.kMp3_padding { padding: 0 5px; }', $('input[type="checkbox"][name="confbox"]').parent().append(' <span class="click kMp3_mark kMp3_padding" rel="reports" toggle="false">' + l.reports + '</span> \t\t\t\t\t<span class="click kMp3_mark kMp3_padding" rel="mail" toggle="false"><img src="img/messages/mail_read.png"></span> <span class="click kMp3_mark kMp3_padding" rel="misc" toggle="false"><img src="img/report/misc.png"></span> <span class="click kMp3_mark kMp3_padding" rel="green" toggle="false"><img src="img/dots/green.png"></span>\t\t\t\t\t<span class="click kMp3_mark kMp3_padding" rel="yellow" toggle="false"><img src="img/dots/yellow.png"></span> <span class="click kMp3_mark kMp3_padding" rel="red" toggle="false"><img src="img/dots/red.png"></span> \t\t\t\t\t<span class="click kMp3_mark kMp3_padding" rel="blue" toggle="false"><img src="img/dots/blue.png"></span> <span class="click kMp3_mark kMp3_padding" rel="support" toggle="false"><img src="img/report/support.png"></span>\t\t\t\t\t<span class="click kMp3_mark kMp3_padding" rel="trade" toggle="false"><img src="img/report/trade.png"></span'), $('.kMp3_mark').click(function () {
          function selector(rel) {
            switch (rel) {
              case 'reports':
                return 'img[src*="red"], img[src*="green"],img[src*="blue"],img[src*="yellow"]';
              case 'mail':
                return 'img[src*="mail"]';
              case 'misc':
                return 'img[src*="misc"]';
              case 'red':
                return 'img[src*="red"]';
              case 'yellow':
                return 'img[src*="yellow"]';
              case 'blue':
                return 'img[src*="blue"]';
              case 'green':
                return 'img[src*="green"]';
              case 'support':
                return 'img[src*="support"]';
              case 'trade':
                return 'img[src*="trade"]'
            }
          }
          var toggle = $(this).attr('toggle'),
          selection = $(selector($(this).attr('rel'))).siblings('input[type="checkbox"]');
          'false' == toggle ? (selection.attr('checked', !0), $(this).attr('toggle', !0))  : 'true' == toggle && (selection.attr('checked', !1), $(this).attr('toggle', !1))
        }), k.modul.massforward)) {
          var messageDetails = function (id) {
            return $.ajax({
              type: 'get',
              url: 'game.php?s=messages&m=forward&id=' + id + av
            }).promise()
          },
          reportSession = function (id) {
            return $.ajax({
              type: 'post',
              url: 'game.php?s=messages&m=forward_report&id=' + id + av
            }).promise()
          };
          $('table.borderlist').eq(5).append('<tr><td colspan="3"><span style="font-weight:bold;">' + l.recipient + ': </span><input type="text" id="kMp3_massforward_nick"> <input type="submit" id="kMp3_massforward" value="(kMp3) ' + l.forward + '"> <span style="display: none; font-weight: bold;" id="kMp3_massforward_text"></span></td></tr>'),
          $('#kMp3_massforward').bind('click', function (event) {
            event.preventDefault();
            var table = $('table.borderlist').eq(5);
            reports = table.find('img[src*="red"], img[src*="green"],img[src*="blue"],img[src*="yellow"]').siblings('input:checked'),
            messages = table.find('img[src*="mail"]').siblings('input:checked'),
            nick = $('#kMp3_massforward_nick').val(),
            session = '',
            0 == reports.length && 0 == messages.length || '' == nick ? $('#kMp3_massforward_text').html(l.forwardError + '!').css('color', 'red').fadeIn(500).delay(800).fadeOut(100)  : ($(reports).each(function () {
              var id = $(this).val();
              '' == session && (session = reportSession(id)),
              session.then(function (results) {
                dt = {
                },
                dt.id = id,
                dt.p = $.kMp3('getUrlParameters', $(results).find('form').attr('action')).p,
                forward('report', dt, nick)
              })
            }), $(messages).each(function () {
              var id = $(this).val(),
              dt = messageDetails(id);
              dt.then(function (results) {
                var form = $(results).find('form'),
                details = {
                };
                details.url = form.prop('action'),
                details.data = form.find('input[type="checkbox"][name="mid[]"]').serialize(),
                forward('message', details, nick)
              })
            }), $('#kMp3_massforward_text').html(l.forwardSuccess + '.').css('color', 'green').fadeIn(500).delay(800).fadeOut(100))
          })
        }
      }
    }
  }(kMp3);
  css += '.kMp3_group_element { display: inline-block; }',
  function (kMp3) {
    kMp3.module.overview = {
      matcher: page.match('s=overview') && !page.match('s=overview_villages'),
      fn: function () {
        var place = $('span[onclick*="groups"]').parent(),
        label = $('span[onclick*="groups"]').text() + ': ',
        insert = place.closest('table:not(.noborder)'),
        villageId = Query.village,
        groups = $.kMp3('getGroups', villageId),
        saveurl = 'popup.php?s=groups&m=village&inta=modifyVillageGroups&village_id=' + villageId + av,
        formGenerator = function (groups) {
          var currentGroups = [
          ],
          o = '<br /><table width="790px" class="borderlist"><tr><th>';
          o += label + ' <span id="kMp3_groups_savestatus" style="color: green; display:none;">' + l.saved + '</span></th></tr><tr><td><form id="kMp3_groups" action="' + saveurl + '">';
          for (var g in groups) if (groups.hasOwnProperty(g)) {
            var checked = groups[g].checked ? 'checked="checked"' : '';
            o += '<span class="kMp3_group_element"><input name="vg[]" value="' + groups[g].id + '" type="checkbox" ' + checked + '> ' + groups[g].name + ' </span>',
            groups[g].checked && currentGroups.push(groups[g].name)
          }
          return o += '</form></td></tr></table><br />',
          currentGroups.length > 0 && place.text(label + currentGroups.join(', ')),
          groups.length > 0 ? o : ''
        };
        insert.before(formGenerator(groups)),
        $('#kMp3_groups').delegate('input', 'click', function () {
          var data = $('#kMp3_groups'),
          newGroups = data.find('input[type="checkbox"]:checked').parent().text();
          $.ajax({
            type: 'POST',
            url: saveurl,
            data: data.serialize(),
            success: function () {
              $('#kMp3_groups_savestatus').kMp3('fadeInfadeOut'),
              place.text(label + newGroups.replace(/  /g, ', '))
            }
          })
        })
      }
    }
  }(kMp3);
  css += '.kMp3_multiselect { display: none; }',
  css += '.kMp3_multiselect_open { display: block !important; }',
  function (kMp3) {
    kMp3.module.overviewvillages = {
      matcher: premium && page.match('s=overview_villages'),
      fn: function () {
          if (page.match('type=own') || page.match('m=4')) {
            $('table.borderlist').eq(3).before('<span id="guardarColoniasParaApoyos" class="click">Guardar colonias para apoyos<span>');
            $('#guardarColoniasParaApoyos').bind('click', function () {
                guardarElListado();
            });
            var iniciarEnAutomatico = false;
            if (iniciarEnAutomatico){
                guardarElListado();
            }
            async function guardarElListado() {
                $.kMp3('saveKey', 'coloniasParaApoyar', '');
                var nuevasColonias = [];
                var coloniaAAgregar = {};
                var filasConLasColonias = document.getElementsByClassName('borderlist')[3].getElementsByTagName('tr');
                for (let i=1; i<(filasConLasColonias.length -1); i++) {
                    var tituloDeLaColonia = filasConLasColonias[i].getElementsByTagName('td')[0].getAttribute("title");
                    var hrefConIDDeLaColonia =filasConLasColonias[i].getElementsByTagName('td')[0].getElementsByTagName('a')[0].getAttribute("href");
                    coloniaAAgregar = {
                        "id": hrefConIDDeLaColonia.substring(hrefConIDDeLaColonia.indexOf('village=')+8,hrefConIDDeLaColonia.indexOf('&s=overview')),
                        "coordenadas":tituloDeLaColonia.substring(tituloDeLaColonia.lastIndexOf('|')-3,tituloDeLaColonia.lastIndexOf('|')+4),
                        "colonia":tituloDeLaColonia,
                        "farmer":filasConLasColonias[i].getElementsByTagName('td')[2].textContent,
                        "sword":filasConLasColonias[i].getElementsByTagName('td')[3].textContent,
                        "spear":filasConLasColonias[i].getElementsByTagName('td')[4].textContent,
                        "axe":filasConLasColonias[i].getElementsByTagName('td')[5].textContent,
                        "bow":filasConLasColonias[i].getElementsByTagName('td')[6].textContent,
                        "spy":filasConLasColonias[i].getElementsByTagName('td')[7].textContent,
                        "light":filasConLasColonias[i].getElementsByTagName('td')[8].textContent,
                        "heavy":filasConLasColonias[i].getElementsByTagName('td')[9].textContent,
                        "ram":filasConLasColonias[i].getElementsByTagName('td')[10].textContent,
                        "kata":filasConLasColonias[i].getElementsByTagName('td')[11].textContent,
                        "snob":filasConLasColonias[i].getElementsByTagName('td')[12].textContent
                    }
                    nuevasColonias.push(coloniaAAgregar);
                }
                localStorage.setItem('coloniasParaApoyar', JSON.stringify(nuevasColonias));
                console.log(nuevasColonias);
                alert('Listado guardado...');
            }
        }
        function getInput() {
          var t = {
          };
          return $('#filterTroops_table').find('input:gt(0):not(:last)').each(function (i) {
            t[i] = 16 != i ? '' == $(this).val() ? 0 : $(this).val()  : 1 == $('#kMp3_filterTroops_onlyTroops:checked').length ? !0 : !1
          }),
          t
        }
        function calculateDistance(source, target) {
          var distance = Math.sqrt(Math.pow(Math.abs(parseInt10(source[0]) - parseInt10(target[0])), 2) + Math.pow(Math.abs(parseInt10(source[1]) - parseInt10(target[1])), 2));
          return Math.round(100 * distance) / 100
        }
        function checkForTroops(wanted, available) {
          for (var r = !1, count_match = 0, i = 0; i < wanted.length; i++) parseInt10(wanted[i]) <= parseInt10(available[i]) && count_match++;
          return r = count_match == wanted.length
        }
        function createBarracksString(troops) {
          for (var output = '', labels = [
            'farmer',
            'sword',
            'spear',
            'axe',
            'bow',
            'spy',
            'light',
            'heavy',
            'ram',
            'kata',
            'snob'
          ], i = 0; i < labels.length; i++) output += '&' + labels[i] + '=' + troops[i];
          return output
        }
        function getSlowestUnit(troops) {
          for (var units = [
            20,
            22,
            22,
            18,
            18,
            9,
            10,
            11,
            30,
            30,
            35
          ], i = 0; i < units.length; i++) 0 == troops[i] && (units[i] = 0);
          return Math.max.apply(Math, units)
        }
        function getResearchSession(villageId) {
          var session;
          return $.ajax({
            type: 'get',
            async: !1,
            url: '/game.php?village=' + villageId + '&s=build_barracks&m=research' + av,
            success: function (data) {
              var p = $(data).find('a[href*="a=research"]:first').attr('href');
              p && (session = p.substring(p.indexOf('a=research&p=') + 13, p.indexOf('&unit=')))
            }
          }),
          session
        }
        function formGenerator(markedGroups, groups, villageId) {
          var formAction = 'popup.php?s=groups&m=village&inta=modifyVillageGroups&village_id=' + villageId + av,
          html = arrow + ' <span class="click kMp3_multiselect_opener"><span class="kMp3_multiselect_count">' + markedGroups.length + '</span> ' + l.selectedGroups + '</span> <span class="kMp3_multiselect_status" style="display: none"></span><br />';
          html += '<div class="kMp3_multiselect"><form action=' + formAction + ' method="POST">';
          for (var g in groups) if (groups.hasOwnProperty(g)) {
            var checkStatus = - 1 != markedGroups.indexOf(groups[g].name) ? 'checked="checked"' : '';
            html += '<input type="checkbox" class="checkbox" ' + checkStatus + ' name="vg[]" value="' + groups[g].id + '"><span>' + groups[g].name + '</span><br />'
          }
          return html += '</form></div>'
        }
        function submitForm(div) {
          $.ajax({
            type: 'post',
            url: div.find('form').attr('action'),
            data: div.find('form').serialize(),
            success: function () {
              div.siblings('.kMp3_multiselect_status').css({
                color: 'green'
              }).text(l.saved).kMp3('fadeInfadeOut')
            }
          })
        }
        if (k.modul.filterOverview && identifyActiveTab('s=overview_villages&m=1')) {
          var unit_runtime = {
            farmer: 20,
            sword: 22,
            spear: 18,
            axe: 18,
            bow: 18,
            spy: 9,
            light: 10,
            heavy: 11,
            ram: 30,
            kata: 30,
            snob: 35
          },
          head = '';
          $('table.borderlist').eq(3).find('tr:first > th:gt(4)').each(function () {
            head += '<td>' + $(this).html() + '</td>'
          });
          var ui = '<table id="filterTroops_table" class="borderlist" style="width: 820px;">';
          ui += '<tr><td><span id="kMp3_filterTroops_status">' + l.troopFilter + '</span></td>' + head + '</tr>',
          ui += '<tr><td><input id="kMp3_filterTroops"  value="' + l.filter + '" type="submit"></td><td><input type="text" name="farmer" size="4" maxlength="5"></td>',
          ui += '<td><input type="text" name="sword" size="4" maxlength="5"></td><td><input type="text" name="spear" size="4" maxlength="5"></td>',
          ui += '<td><input type="text" name="axe" size="4" maxlength="5"></td><td><input type="text" name="bow" size="4" maxlength="5"></td>',
          ui += '<td><input type="text" name="spy" size="4" maxlength="5"></td><td><input type="text" name="light" size="4" maxlength="5"></td>',
          ui += '<td><input type="text" name="heavy" size="4" maxlength="5"></td><td><input type="text" name="ram" size="4" maxlength="5"></td>',
          ui += '<td><input type="text" name="kata" size="4" maxlength="5"></td><td><input type="text" name="snob" size="4" maxlength="5"></td></tr>',
          ui += '<tr><td>' + l.target + ': <input id="kMp3_filterTroops_target" type="text" size="7"></td>',
          ui += '<td colspan="10">' + l.toa + ': ',
          ui += l.days + ' <input id="kMp3_filterTroops_arrival_d" type="text" size="2">' + l.hours + ' <input id="kMp3_filterTroops_arrival_h" type="text" size="2">',
          ui += l.minutes + ' <input id="kMp3_filterTroops_arrival_m" type="text" size="2"> ' + l.seconds + ' <input id="kMp3_filterTroops_arrival_s" type="text" size="2">',
          ui += ' <input type="checkbox" id="kMp3_filterTroops_onlyTroops">' + l.withoutRuntime + '</td>',
          ui += '<td><input type="submit" id="kMp3_filterTroops_save" value="' + l.save + '"></td>',
          ui += '</tr><tr><td colspan="12">' + displayTrooplinks() + '</td></tr></table><br />',
          $('table.borderlist').eq(3).before(ui);
          var filterTroopsInput = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: '000|000',
            12: 0,
            13: 0,
            14: 0,
            15: 0,
            16: !1
          };
          $.kMp3('isKey', 'kMp3_filterTroops') && (filterTroopsInput = $.kMp3('loadKey', 'kMp3_filterTroops')),
          $('#filterTroops_table').find('input:gt(0):not(:last)').each(function (i) {
            16 != i ? $(this).val(filterTroopsInput[i])  : filterTroopsInput[i] && $('#kMp3_filterTroops_onlyTroops').prop('checked', 'checked')
          }),
          $('span.kMp3_mark').click(function () {
            var number = $(this).attr('id'),
            troops = k.trooplinks[number.substring(number.indexOf('kMp3_trooplink_') + 14)];
            for (var unit in unit_runtime) unit_runtime.hasOwnProperty(unit) && $('input[name="' + unit + '"]').val(troops[unit])
          }),
          $('table.borderlist').eq(4).on('click mouseup', '.kMp3_link_to_barracks', function () {
            $(this).closest('tr').find('td').addClass('kMp3_used')
          }),
          $('#kMp3_filterTroops_save').bind('click', function () {
            $.kMp3('saveKey', 'kMp3_filterTroops', getInput()),
            $('#kMp3_filterTroops_status').fadeOut().html(l.saved).css('color', 'green').fadeIn('slow', function () {
              $(this).delay(800).html(l.troopFilter).css('color', 'black').fadeIn()
            })
          }),
          $('#kMp3_filterTroops').bind('click', function () {
            $('table.borderlist').eq(4).find('tr:first > th:nth-child(2)').html(l.toa),
            parseInt10($('#kMp3_filterTroops_noMatch').length) > 0 && $('#kMp3_filterTroops_noMatch').remove();
            var isPaginated = !1,
            currInput = getInput(),
            time = parseInt10(currInput[15]) + 60 * parseInt10(currInput[14]) + 3600 * parseInt10(currInput[13]) + 86400 * parseInt10(currInput[12]),
            target = currInput[11].split('|'),
            troops = [
              currInput[0],
              currInput[1],
              currInput[2],
              currInput[3],
              currInput[4],
              currInput[5],
              currInput[6],
              currInput[7],
              currInput[8],
              currInput[9],
              currInput[10]
            ],
            barracksString = createBarracksString(troops),
            sortable = [
            ],
            slowestUnit = getSlowestUnit(troops),
            lz = 1 / parseFloat(getWorldUnitSpeed(), 10) * parseFloat(slowestUnit, 10) * 60,
            onlyTroops = 1 == $('#kMp3_filterTroops_onlyTroops:checked').length ? !0 : !1;
            $('table.borderlist').eq(4).find('tr:gt(0)').each(function () {
              if ($(this).find('td:first').attr('colspan')) isPaginated = !0,
              $(this).addClass('pagination');
               else {
                var source = $(this).find('span[id*="qeText"]').attr('title');
                source = source.match(/[0-9]{3}\|[0-9]{3}/) [0].split('|');
                var distance = calculateDistance(source, target),
                runtime = Math.ceil(distance * lz);
                if (onlyTroops || time > runtime) {
                  var avail_troops = [
                  ];
                  if ($(this).find('td:gt(4)').each(function (i) {
                    var unit;
                    10 > i ? (unit = $(this).attr('title'), unit = unit.substring(0, unit.indexOf(' ')), unit = unit.replace(/\./g, ''))  : unit = $(this).find('a').html(),
                    avail_troops.push(unit)
                  }), checkForTroops(troops, avail_troops)) {
                    var id = $(this).find('td:first').find('a').attr('href');
                    id = id.substring(0, id.lastIndexOf('&s=') + 3),
                    $(this).attr('time', runtime).css('display', 'table-row').find('td:nth-child(2)').html('<a class="kMp3_link_to_barracks" href="' + id + 'build_barracks&m=command' + barracksString + '&send_x=' + target[0] + '&send_y=' + target[1] + av + '" target="_blank">' + $.kMp3('prettyTime', runtime) + '</a>'),
                    sortable.push(runtime)
                  } else $(this).css('display', 'none')
                } else $(this).css('display', 'none')
              }
            });
            var tbody = $('table.borderlist').eq(4).find('tbody');
            if (0 == parseInt10($('table.borderlist').eq(4).find('tr:gt(0):visible').not('.pagination').length)) {
              var appendice = '<tr id="kMp3_filterTroops_noMatch"><td colspan="16">' + l.noMatch + '.</td></tr>';
              isPaginated ? $('table.borderlist').eq(4).find('.pagination:first').after(appendice)  : $('table.borderlist').eq(4).find('tr:visible').after(appendice)
            } else sortable.sort(function (a, b) {
              return a - b
            }),
            $.each(sortable, function (i) {
              $('table.borderlist').eq(4).find('tr[time*="' + sortable[i] + '"]').appendTo(tbody)
            }),
            isPaginated && $('table.borderlist').eq(4).find('.pagination:last').appendTo(tbody)
          })
        } else if (identifyActiveTab('s=overview_villages&m=8')) $('.contentpane .borderlist').eq(1).find('th').parent().before('<tr><td colspan="13"><span id="kMp3_research" class="click">' + l.researchMissingTroops + '</span></td></tr>'),
        $('#kMp3_research').click(function () {
          $(this).text(l.beingProcessed + '...').css({
            color: 'crimson',
            'font-weight': 'bold'
          });
          var session,
          research = [
          ];
          $('.contentpane .borderlist').eq(1).find('img[src*="grey.png"]').parent().parent().each(function () {
            var research_units = [
              'farmer',
              'sword',
              'spear',
              'axe',
              'bow',
              'spy',
              'light',
              'heavy',
              'ram',
              'kata',
              'snob'
            ],
            current = $(this),
            last = current.find('td:last'),
            villageId = current.find('td:first').find('a').attr('href');
            villageId = villageId.substring(villageId.indexOf('village=') + 8, villageId.indexOf('&s=build_barracks')),
            current.find('td:gt(0):lt(10)').each(function (i) {
              if ($(this).find('img[src*="grey.png"]').length && 0 === last.find('img[src*="unit_' + research_units[i] + '"]').length) {
                'undefined' == typeof session && (session = getResearchSession(villageId));
                var researchLink = '/game.php?village=' + villageId + '&s=build_barracks&m=research&a=research&p=' + session + '&unit=' + research_units[i] + av;
                research.push(researchLink)
              }
            })
          }),
          research.length > 0 ? !function makeResearch(queue) {
            $.ajax({
              type: 'post',
              url: queue.shift(),
              success: function () {
                if (queue.length > 0) makeResearch(queue);
                 else {
                  var page = Query.start;
                  page = 'undefined' == typeof page ? '' : '&start=' + page,
                  $.ajax({
                    type: 'post',
                    url: '/game.php?s=overview_villages&m=8' + page + av,
                    success: function (data) {
                      var table = $(data).find('.contentpane .borderlist').eq(1);
                      $('.contentpane .borderlist').eq(1).replaceWith(table),
                      window.alert(l.researchStarted)
                    }
                  })
                }
              }
            })
          }(research)  : ($(this).replaceWith(l.noMissingResearch), window.alert(l.noMissingResearch))
        });
         else if (page.match('m=4&type=away_detail')) {
          var selection = [
          ];
          if ($('table[class*="borderlist"]').eq(3).find('input[type="checkbox"]').parent().parent().each(function () {
            var villageId = $(this).find('td:first').find('a').attr('href');
            villageId = villageId.substring(villageId.lastIndexOf('=') + 1),
            $(this).find('td:first').attr('colspan', '1').after('<td class="marked_group"><span class="click removeall" villageId="' + villageId + '">' + l.all + '</span></td>')
          }), $.kMp3('isKey', 'kMp3_selection')) {
            $('td[colspan*="14"]').append(' <span id="kMp3_loadSelection" class="click kMp3_mark">' + l.markSelection + '</span>');
            var selection = $.kMp3('loadKey', 'kMp3_selection');
            $('#kMp3_loadSelection').bind('click', function () {
              for (var i in selection) selection.hasOwnProperty(i) && $('table[class*="borderlist"]').eq(3).find('td[class*="marked_group"]').parent().find('td:first > a[href*="' + selection[i] + '"]').each(function () {
                $(this).siblings('input').attr('checked', 'true'),
                $(this).parent().parent().find('td[class*="marked_group"]').eq(1).find('span').removeClass('click removeall')
              })
            }),
            $('td[colspan*="14"]').append(' <span id="kMp3_deleteSelection" class="click kMp3_mark">' + l.deleteSelection + '</span>'),
            $('#kMp3_deleteSelection').bind('click', function () {
              $.kMp3('deleteKey', 'kMp3_selection'),
              $('#kMp3_loadSelection, #kMp3_deleteSelection').kMp3('fadeOutRemove')
            })
          }
          $('span[class*="removeall"]').bind('click', function () {
            var villageId = $(this).attr('villageId');
            $('table[class*="borderlist"]').eq(3).find('td[class*="marked_group"]').parent().find('td:first > a[href*="' + villageId + '"]').each(function () {
              $(this).siblings('input').attr('checked', 'true'),
              $(this).parent().parent().find('td[class*="marked_group"]').eq(1).find('span').removeClass('click removeall')
            }),
            selection.push(villageId)
          }),
          $('td[colspan*="14"]:first > a, td[colspan*="14"]:first > input, input[value*="' + l.retrieve + '"]').bind('click', function () {
            0 != selection.length && $.kMp3('saveKey', selection)
          })
        } else if (k.modul.sortOwnAttacks && identifyActiveTab('s=overview_villages&m=5&type=attack')) {
          var table = $('.borderlist').eq(3),
          button = $('<input type="submit" id="kMp3_sort_attack_overview_submit" value="' + l.modul.sortOwnAttacks + '">');
          table.before(button),
          button.click(function () {
            $(this).remove();
            {
              var isPaginated = 14 == table.find('tr:first > td').prop('colspan'),
              bounds = isPaginated ? 2 : 1;
              table.find('th:first').parent()
            }
            rows = table.find('tr:gt(' + (bounds - 1) + ')'),
            rows = rows.slice(0, - bounds),
            rows.map(function (i, element) {
              var href = $(this).find('td:first').find('a').prop('href'),
              id = 'jump_' + $.kMp3('getUrlParameters', href).id;
              return $(element).prop('id', id)
            });
            var sort_by_coordinates = function (a, b) {
              var make_a = $(a).find('td').eq(1).find('a').eq(1).html(),
              make_b = $(b).find('td').eq(1).find('a').eq(1).html(),
              xya = make_a.split('|'),
              xyb = make_b.split('|');
              return xya[0] + xya[1] - (xyb[0] + xyb[1])
            },
            sorted = rows.sort(sort_by_coordinates);
            rows.remove(),
            table.find('tr').eq(bounds - 1).after(sorted);
            var create_overview = function (sorted) {
              var object = {
              },
              result = '';
              sorted.each(function () {
                var td = $(this).find('td'),
                target = td.eq(1).find('a').eq(1).html(),
                link = td.eq(1).html(),
                barracks = td.eq(2).find('a').prop('href');
                arrival = td.eq(3).text(),
                jump = '#' + $(this).prop('id'),
                isSnob = 0 != td.eq(14).text(),
                object[target] ? (object[target].count += 1, isSnob && (object[target].snob += 1, '' == object[target].snobf && (object[target].snobf = arrival, object[target].snobj = jump)), object[target].last = arrival, object[target].llink = barracks)  : object[target] = {
                  count: 1,
                  snob: isSnob ? 1 : 0,
                  snobf: isSnob ? arrival : '',
                  snobj: isSnob ? jump : '',
                  link: link,
                  first: arrival,
                  flink: barracks,
                  fjump: jump,
                  last: arrival,
                  llink: barracks
                }
              });
              for (var target in object) if (object.hasOwnProperty(target)) {
                var snob = 0 != object[target].snob ? ' (<a class="jump" data-href="' + object[target].snobj + '" href="' + object[target].snobj + '" title="' + object[target].snobf + '">' + object[target].snob + '</a>)' : '';
                result += '<tr><td>' + object[target].link + '</td><td><span class="count">' + object[target].count + '</span>' + snob + '</td><td><a data-href="' + object[target].flink + '" href="' + object[target].flink + '" target="_blank">' + object[target].first + '</a> (<a  class="jump" data-href="' + object[target].fjump + '" href="' + object[target].fjump + '">' + l.goto + '</a>)</td><td><a href="' + object[target].llink + '" target="_blank">' + object[target].last + '</a></td></tr>'
              }
              return result
            };
            0 == $('#kMp3_sort_attack_overview').length ? table.before('<table class="borderlist" style="width:820px;" id="kMp3_sort_attack_overview"><tr><th>' + l.target + '</th><th>' + l.amount + '</th><th>' + l.arrival + '</th><th>' + l.arrival + '</th></tr></table><br />')  : $('#kMp3_sort_attack_overview').find('tr:gt(1)').remove(),
            $('#kMp3_sort_attack_overview').append(create_overview(sorted)).on('click', '.jump', function () {
              var row = $(this).closest('tr'),
              first = row.find('.jump:last').data('href');
              amount = row.find('.count').text(),
              table.find('td.kMp3_used').removeClass('kMp3_used'),
              $(first).prev().nextAll('tr:lt(' + amount + ')').find('td').addClass('kMp3_used')
            })
          })
        } else if (identifyActiveTab('m=6&type=notignored')) {
          $('table.borderlist').eq(3).find('tr > td[colspan]').addClass('kMp3_pagination');
          var table = $('table.borderlist').eq(3).find('tr > td:not(.kMp3_pagination)');
          table.parent().each(function () {
            var t = $(this).find('td').eq(0),
            attId = '',
            id = $(this).find('td').eq(1).find('a').attr('href');
            attId = $.kMp3('getUrlParameters', t.find('a').attr('href')).id,
            id = $.kMp3('getUrlParameters', id).id,
            t.find('a').eq(0).before('<input type="checkbox" class="kMp3_help_ignore" data-sid="' + id + '" value="' + attId + '">')
          }),
          table.parent().parent().append('<tr><th colspan="3"><input type="checkbox" class="kMp3_help_ignore" id="kMp3_ignore_all"> ' + l.selectAll + '</th><td colspan="2"><input id="kMp3_ignore_submit" type="submit" value="' + l.ignore + '"></td></tr>'),
          $('#kMp3_ignore_all').click(function () {
            $('.kMp3_help_ignore').prop('checked', $(this).prop('checked'))
          }),
          $('#kMp3_ignore_submit').click(function () {
            var checked = $('.kMp3_help_ignore:checked').length;
            if (checked) {
              $('#kMp3_ignore_submit').after(' <div class="kMp3_spinner"></div>');
              var ignore = {
              };
              $('.kMp3_help_ignore:checked').each(function () {
                var t = $(this),
                id = t.data('sid'),
                attId = t.val();
                ignore[id] || (ignore[id] = [
                ]),
                ignore[id].push(attId)
              });
              var villageId = table.find('.kMp3_help_ignore:first').data('sid'),
              url = 'game.php?village=' + villageId + '&s=build_barracks&m=command' + av;
              $.when($.kMp3('getSession', url)).then(function (raw) {
                var session = $.kMp3('getUrlParameters', $(raw).find('form[name="ignore"]').attr('action')).p,
                ignoreUrl = 'game.php?village=kMp3_ignore_placeholder&s=build_barracks&m=command&a=setTroopIgnore&p=' + session + av;
                for (var sett in ignore) ignore.hasOwnProperty(sett) && $.kMp3('queue', {
                  type: 'post',
                  url: ignoreUrl.replace('kMp3_ignore_placeholder', sett),
                  data: 'ignore[]=' + ignore[sett].join('&ignore[]=')
                })
              })
            }
          })
          if (displayAttacksWithSeconds(3), k.modul.insertIntoRuntimeCalc) {
            var server_time_on_load = createDate($('#servertime').text().split(':'));
            var row = $('table.borderlist').eq(3).find('tr > td').parent();
            row.each(function () {
              var cur = $(this);
              if (cur.find('td[class*="list"]')) {
                var children = cur.children(),
                description = '',
                href,
                icon,
                attack_details = getAttackDetails(children, server_time_on_load);
                href = '&target=' + attack_details['target'] + '&source=' + attack_details['source'] + '&time=' + attack_details['time'] + '&starttime=' + (new Date).getTime();
                if (attack_details['is_attack'] == false) icon = '<img src="/img/command/support.png"></img>';
                 else if (attack_details['unit'] == 'snob' || !attack_details['signed']) icon = '<img src="' + unit_img[attack_details['unit']] + '"></img>';
                 else icon = '<img src="/img/command/attack.png"></img>';
                if (!attack_details['signed']) description = units_short_es[attack_details['unit']];
                 else description = attack_details['description'];
                children.eq(4).find('span').attr('reload', 'false');
                children.eq(0).find('img:first').replaceWith(icon);
                children.eq(0).find('a:first').attr('href', '/game.php?&s=tools&m=runtime_calculator' + href + av);
                children.eq(0).find('input').eq(1).val(description);
                children.eq(0).find('a:last').remove();
              }
            })
          }
        }
        else if (identifyActiveTab('s=overview_villages&m=6')) {
          if (displayAttacksWithSeconds(3), k.modul.insertIntoRuntimeCalc) {
            var server_time_on_load = createDate($('#servertime').text().split(':'));
            var row = $('table.borderlist').eq(3).find('tr > td').parent();
            row.each(function () {
              var cur = $(this);
              if (cur.find('td[class*="list"]')) {
                var children = cur.children(),
                description = '',
                href,
                icon,
                attack_details = getAttackDetails(children, server_time_on_load);
                href = '&target=' + attack_details['target'] + '&source=' + attack_details['source'] + '&time=' + attack_details['time'] + '&starttime=' + (new Date).getTime();
                if (attack_details['is_attack'] == false) icon = '<img src="/img/command/support.png"></img>';
                 else if (attack_details['unit'] == 'snob' || !attack_details['signed']) icon = '<img src="' + unit_img[attack_details['unit']] + '"></img>';
                 else icon = '<img src="/img/command/attack.png"></img>';
                if (!attack_details['signed']) description = units_short_es[attack_details['unit']];
                 else description = attack_details['description'];
                children.eq(4).find('span').attr('reload', 'false');
                children.eq(0).find('img:first').replaceWith(icon);
                children.eq(0).find('a:first').attr('href', '/game.php?&s=tools&m=runtime_calculator' + href + av);
                children.eq(0).find('input:first').val(description);
                children.eq(0).find('a:last').remove();
              }
            })
          }
        } else identifyActiveTab('s=overview_villages&m=9') && ($('.kMp3_multiselect_opener').live('click', function () {
          var div = $(this).siblings('div.kMp3_multiselect');
          $('div.kMp3_multiselect_open').each(function () {
            $(this).removeClass('kMp3_multiselect_open')
          }),
          div.toggleClass('kMp3_multiselect_open')
        }), $('.checkbox').live('change', function () {
          var form = $(this).parent(),
          count = form.find('.checkbox:checked').length,
          siblings = form.parent().parent().siblings();
          submitForm(form.parent()),
          form.parent().siblings('span.click').find('.kMp3_multiselect_count').text(count),
          siblings.eq(1).text(count),
          siblings.eq(2).html('<div style="width: 200px;">' + $.map(form.find('.checkbox:checked').next('span'), function (element) {
            return $(element).text()
          }).join('; ') + '</div>')
        }), $(document).ready(function () {
          function lazyManipulate(doubleCache) {
            doubleCache.slice(step, step + stepSize).each(function () {
              var parent = $(this).parent(),
              markedGroups = parent.find('td:eq(2)'),
              markedGroups = 1 == markedGroups.find('span.notice').length ? [
              ] : $(this).parent().find('td:eq(2)').text().trim().split('; ');
              villageId = parent.find('td:eq(0)').find('a').attr('href'),
              villageId = villageId.substring(villageId.indexOf('village=') + 8, villageId.indexOf('&s=overview')),
              $(this).replaceWith('<td>' + formGenerator(markedGroups, groups, villageId) + '</td>')
            }),
            step += stepSize,
            steps--,
            steps > 0 && setTimeout(function () {
              lazyManipulate(doubleCache)
            }, 50)
          }
          var tableCache = $('table.borderlist').eq(3),
          firstVillageId = tableCache.find('tr > td:first').find('a').attr('href');
          firstVillageId = firstVillageId.substring(firstVillageId.indexOf('village=') + 8, firstVillageId.indexOf('&s=overview_villages'));
          var groups = $.kMp3('getGroups', firstVillageId);
          tableCache.find('tr > th').parent().find('th:last').css({
            width: 'auto'
          }).end().find('th:eq(2)').css({
            width: '200px'
          });
          var doubleCache = tableCache.find('tr > td').parent().find('td:eq(3)'),
          doubleCacheLength = doubleCache.length,
          stepSize = 100,
          steps = Math.ceil(doubleCacheLength / stepSize),
          step = 0;
          lazyManipulate(doubleCache)
        }))
      }
    }
  }(kMp3);
  !function (kMp3) {
    kMp3.module.redir = {
      matcher: page.match('redir.php'),
      fn: function () {
        var link = $('.contentpane:last').find('a'),
        href = link.attr('href');
        href = $('<div/>').html(href).text(),
        link.text(href).prop('href', href)
      }
    }
  }(kMp3);
  !function (kMp3) {
    kMp3.module.runtimecalculator = {
      matcher: k.modul.insertIntoRuntimeCalc && page.match('m=runtime_calculator'),
      fn: function () {
        if (page.match('&target=')) {
          var target = Query.target.split('|'),
          source = Query.source.split('|'),
          time = Query.time,
          starttime = Query.starttime;
          $.kMp3('saveKey', 'time', time),
          $.kMp3('saveKey', 'starttime', starttime),
          $('input[id*="start"], input[id*="target"]').kMp3('multiCheckBoxes', source.concat(target)),
          $('input[type*="submit"]').click()
        } else if (page.match('&inta=calculate')) {
          var time = $.kMp3('deleteKey', 'time');
          starttime = $.kMp3('deleteKey', 'starttime'),
          currenttime = (new Date).getTime(),
          time -= Math.floor((currenttime - starttime) / 1000),
          time = 0 >= time ? 0 : time,
          time = $.kMp3('prettyTime', time),
          $('table[class*="borderlist"]').eq(4).find('tbody').prepend('<tr><td colspan="3"><p style="color: #DC143C; font-weight: bold; text-align: center;">' + l.runtimecalc + ' ' + time + '</p></td></tr>'),
          $('table[class*="borderlist"] > tbody > tr > td[class*="right"]').each(function () {
            var runtime_unit = $(this).text().split(':'),
            timeInSeconds = time.split(':'),
            inSeconds = function (time) {
              return 3600 * parseInt10(time[0]) + 60 * parseInt10(time[1]) + parseInt10(time[2])
            };
            runtimeInSeconds = inSeconds(runtime_unit),
            timeInSeconds = inSeconds(timeInSeconds),
            timeInSeconds > runtimeInSeconds && $(this).css('color', 'grey')
          })
        }
      }
    }
  }(kMp3);
  var h = document.getElementsByTagName('head') [0],
  injectCss = document.createElement('style');
  injectCss.type = 'text/css',
  injectCss.appendChild(document.createTextNode(css)),
  h.appendChild(injectCss);
  var modules = kMp3.module;
  for (var module in modules) modules.hasOwnProperty(module) && modules[module].matcher && modules[module].fn();