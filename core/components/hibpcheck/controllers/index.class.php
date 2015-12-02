<?php
require_once dirname(dirname(__FILE__)) . '/model/hibp.class.php';
class hibpCheckIndexManagerController extends modExtraManagerController {
  public $hibp;
  public function initialize() {
    $this->hibp = new Hibp($this->modx);
    $this->addJavascript($this->hibp->config['jsUrl'].'hibp.class.js');
    $this->addHtml(
      '<script type="text/javascript">
        Ext.onReady(function() {
          Hibp.config = '.$this->modx->toJSON($this->hibp->config).';
        });
      </script>'
    );
    return parent::initialize();
  }
  public function process(array $scriptProperties = array()) {}
    /**
     * Register custom CSS/JS for the page
     * @return void
     */
    public function loadCustomCssJs() {
      $this->addJavascript($this->hibp->config['jsUrl'].'widgets/section.js');
      $this->addJavascript($this->hibp->config['jsUrl'].'widgets/panel.tabs.js');
      $this->addJavascript($this->hibp->config['jsUrl'].'widgets/tab.grid.js');
    }
      
    public function getPageTitle() {
        return 'Test CMP';
    }
    public function getTemplateFile() {
        return $this->hibp->config['templatesPath'].'home.tpl';
    }
}