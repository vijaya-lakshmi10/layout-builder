// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-control-container">
          <div className="sub-container">
            <h1 className="heading">Layout</h1>
            <div className="checkboxes-container">
              <div className="checkbox-sub-container">
                <input
                  checked={showContent}
                  onChange={onChangeContent}
                  type="checkbox"
                  id="content"
                />
                <label className="label" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="checkbox-sub-container">
                <input
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                  type="checkbox"
                  id="leftNavbar"
                />
                <label className="label" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-sub-container">
                <input
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                  type="checkbox"
                  id="rightNavbar"
                />
                <label className="label" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
