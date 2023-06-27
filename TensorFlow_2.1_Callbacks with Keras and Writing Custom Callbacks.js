Callbacks in Keras are a way to customize the behavior of a model during training, evaluation, or inference. They can be used to monitor internal states and statistics of the model, perform custom actions, or modify the training process.

Using Keras Callbacks

You can pass a list of callbacks to the fit, evaluate, or predict methods of a Keras model. Here's an example using the ModelCheckpoint and EarlyStopping callbacks:

from tensorflow.keras.callbacks import ModelCheckpoint, EarlyStopping

checkpoint = ModelCheckpoint("model_weights.h5", save_best_only=True, monitor="val_loss")
early_stopping = EarlyStopping(patience=3, monitor="val_loss")

callbacks = [checkpoint, early_stopping]

model.fit(train_generator, epochs=10, validation_data=validation_generator, callbacks=callbacks)
Writing Custom Callbacks

To create a custom callback, you need to subclass the tf.keras.callbacks.Callback class and override its methods, which are called at different stages of training, testing, and predicting. Here's an example of a custom callback that logs the training loss at the end of each epoch:

import tensorflow as tf

class LossLoggerCallback(tf.keras.callbacks.Callback):
    def on_epoch_end(self, epoch, logs=None):
        logs = logs or {}
        loss = logs.get("loss")
        if loss is not None:
            print(f"Epoch {epoch + 1}: Training loss = {loss}")

loss_logger = LossLoggerCallback()
callbacks = [loss_logger]

model.fit(train_generator, epochs=10, validation_data=validation_generator, callbacks=callbacks)
Using LambdaCallback

Another way to create custom callbacks is by using the LambdaCallback. This allows you to convert any function into a callback function that can be invoked during training, evaluation, or inference. Here's an example that logs the training loss at the end of each epoch using LambdaCallback:

from tensorflow.keras.callbacks import LambdaCallback

def log_loss(epoch, logs):
    print(f"Epoch {epoch + 1}: Training loss = {logs['loss']}")

loss_logger = LambdaCallback(on_epoch_end=log_loss)
callbacks = [loss_logger]

model.fit(train_generator, epochs=10, validation_data=validation_generator, callbacks=callbacks)
These examples demonstrate how to implement callbacks with Keras and how to write custom callbacks for specific use cases. You can modify these examples to create your own custom actions during the training, evaluation, or inference processes (keras.io, medium.com, stackabuse.com).








MORE EXPLANANTION
*********************************************************************************************************************************************8

Callbacks in TensorFlow/Keras are objects that can be used to customize and extend the behavior of the training process. They allow you to perform actions at different stages of training, such as at the start or end of an epoch, before or after a batch, or when a certain condition is met. Let's explore how to implement callbacks using code samples in TensorFlow/Keras.

1. Built-in Callbacks in Keras:

python
Copy code
import tensorflow as tf

# Define a callback for early stopping
early_stopping = tf.keras.callbacks.EarlyStopping(monitor='val_loss', patience=3)

# Create a model and compile it
model = tf.keras.Sequential([...])
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Train the model with the early stopping callback
model.fit(train_data, train_labels, validation_data=(val_data, val_labels),
          epochs=10, callbacks=[early_stopping])
In this example, the EarlyStopping callback is used to stop the training process if the validation loss does not improve for a certain number of epochs (patience). The callback is passed as a list to the callbacks parameter when calling the fit method. During training, the callback monitors the validation loss and stops the training if the loss does not improve after the specified number of epochs.

2. Writing Custom Callbacks:

python
Copy code
import tensorflow as tf

class CustomCallback(tf.keras.callbacks.Callback):
    def on_epoch_end(self, epoch, logs=None):
        if logs.get('accuracy') > 0.95:
            print("\nReached 95% accuracy, stopping training...")
            self.model.stop_training = True

# Create a model and compile it
model = tf.keras.Sequential([...])
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Train the model with the custom callback
model.fit(train_data, train_labels, epochs=10, callbacks=[CustomCallback()])
In this example, a custom callback named CustomCallback is defined by subclassing the tf.keras.callbacks.Callback class. The on_epoch_end method is overridden to perform a custom action at the end of each epoch. In this case, if the accuracy reaches a certain threshold (95%), the training process is stopped by setting self.model.stop_training = True. The custom callback is passed as a list to the callbacks parameter when calling the fit method.

Custom callbacks provide flexibility to execute specific actions during training, such as saving checkpoints, logging metrics, adjusting learning rates, or implementing custom stopping conditions. You can define additional methods in the custom callback class, such as on_batch_begin, on_batch_end, or on_train_begin, to further customize the training process.

Note: The code samples provided are basic examples, and the implementation of callbacks can be customized based on your specific needs and requirements.




































  
