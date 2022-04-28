//
//  NSProxy+WebViewProxy.h
//  ConsolePrint
//
//  Created by Cirno MainasuK on 2019-6-27.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface WebViewProxy<T>: NSProxy

@property (nonatomic, weak, readonly) T primary;
@property (nonatomic, weak) T secondary;

- (instancetype)init:(T)primary;

- (void)registerSecondary:(T)delegate;

@end

NS_ASSUME_NONNULL_END
