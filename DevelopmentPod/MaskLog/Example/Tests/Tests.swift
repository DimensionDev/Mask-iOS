import XCTest
import MaskLog

class Tests: XCTestCase {
    var log = Logger(label: "io.maskbook.maskbook.logging")
    
    override func setUp() {
        super.setUp()
        LoggingSystem.bootstrap(LoggingOSLog.init)
        log.logLevel = .debug
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testExample() {
        log.info("App launched")
    }
}
