<?

namespace Drupal\zero\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * An example controller.
 */
class ZeroRoutingController extends ControllerBase {

  /**
   * Returns a render-able array for a test page.
   */
  public function content() {
    $build = [
      '#markup' => $this->t('Hello World!'),
    ];
    return $build;
  }

}