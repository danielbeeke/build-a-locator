<?php

  $search_items = array(
    'Apeldoorn',
    'Arnhem',
    'Bredevoort',
    'Buren',
    'Culemborg',
    'Deil',
    'Dieren',
    'Doetinchem',
    'Ede',
    'Enspijk',
    'Gendt',
    'Groenlo',
    'Harderwijk',
    'Hattem',
    'Huissen',
    'Nijkerk',
    'Nijmegen',
    'Tiel',
    'Wageningen',
    'Wijchen',
    'Winterswijk',
    'Zaltbommel',
    'Zutphen'
  );

  if (isset($_GET['q'])) {
    foreach ($search_items as $search_item) {
      $pos = strpos(strtolower($search_item), check_plain($_GET['q']));

      print $pos;

      if ($pos === FALSE) {
        $menu['links'][] = array(
          'title' => $search_item,
          'icon' => 'wrench',
          'href' => 'data/settings'
        );
      }
    }
  }

  $menu['links'][] = array(
    'title' => 'Settings',
    'icon' => 'wrench',
    'href' => 'data/settings'
  );

  $menu['links'][] = array(
    'title' => 'Information',
    'icon' => 'info-sign',
    'href' => 'data/settings'
  );


  header('Content-type: application/json');

  print json_encode($menu);