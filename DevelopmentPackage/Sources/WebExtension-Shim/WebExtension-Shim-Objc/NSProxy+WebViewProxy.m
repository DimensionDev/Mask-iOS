//
//  NSProxy+WebViewProxy.m
//  ConsolePrint
//
//  Created by Cirno MainasuK on 2019-6-27.
//

#import "NSProxy+WebViewProxy.h"

@implementation WebViewProxy

- (instancetype)init:(id)primary
{
    if (self != nil) {
        _primary = primary;
    }
    return self;
}

- (void)registerSecondary:(id)delegate
{
    _secondary = delegate;
}

- (NSMethodSignature *)methodSignatureForSelector:(SEL)sel
{
    NSMethodSignature *signature;
    signature = [_primary methodSignatureForSelector:sel];
    return signature;
}

- (void)forwardInvocation:(NSInvocation *)invocation
{
    if ([_primary respondsToSelector:invocation.selector]) {
        [invocation invokeWithTarget:_primary];
    }
    if ([_secondary respondsToSelector:invocation.selector]) {
        [invocation invokeWithTarget:_secondary];
    }
}

@end
