//
//  SafariExtensionViewController.swift
//  youtube 8k Extension
//
//  Created by imraan-go on 12/29/20.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:350, height:50)
        return shared
    }()

}
