//
//  FetchedResultsControllerPublisher.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/14.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import Foundation

final class FetchedResultsPublisher<T: NSFetchRequestResult>: NSObject, NSFetchedResultsControllerDelegate {
    private let fetchController: NSFetchedResultsController<T>
    private lazy var resultSubject = CurrentValueSubject<[T], Never>([])

    init(
        fetchResultController: NSFetchedResultsController<T>,
        fetchImmediately: Bool = true
    ) {
        self.fetchController = fetchResultController
        super.init()
        self.fetchController.delegate = self
        if fetchImmediately {
            self.fetchData()
        }
    }

    private func fetchData() {
        fetchController.managedObjectContext.performAndWait { [weak self] in
            do {
                try self?.fetchController.performFetch()
                self?.resultSubject.send(self?.fetchController.fetchedObjects ?? [])
            } catch {
                Swift.print(error)
            }
        }
    }

    @objc
    func controllerDidChangeContent(_ controller: NSFetchedResultsController<NSFetchRequestResult>) {
        resultSubject.send(fetchController.fetchedObjects ?? [])
    }
}

extension FetchedResultsPublisher: Subject {
    typealias Output = [T]
    typealias Failure = Never

    final var value: Output {
        resultSubject.value
    }

    func receive<S>(subscriber: S) where S: Subscriber, Never == S.Failure, [T] == S.Input {
        resultSubject.receive(subscriber: subscriber)
    }

    func send(_ value: [T]) {
        resultSubject.send(value)
    }

    func send(completion: Subscribers.Completion<Never>) {
        resultSubject.send(completion: completion)
    }

    func send(subscription: Subscription) {
        resultSubject.send(subscription: subscription)
    }
}
