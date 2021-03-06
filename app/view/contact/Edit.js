/*
 * File: app/view/contact/Edit.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ExtMVC.view.contact.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.contactform',

    autoShow: true,
    height: 168,
    width: 398,
    layout: {
        type: 'fit'
    },
    iconCls: 'icon-user',
    title: 'Create/Edit Contact',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    style: 'background-color: #fff;',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            name: 'id',
                            fieldLabel: 'Label'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'name',
                            fieldLabel: 'Name',
                            msgTarget: 'side',
                            allowBlank: false,
                            maxLength: 255
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'phone',
                            fieldLabel: 'Phone #',
                            msgTarget: 'side',
                            allowBlank: false,
                            maxLength: 255
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'email',
                            fieldLabel: 'Email',
                            msgTarget: 'side',
                            allowBlank: false,
                            maxLength: 255,
                            vtype: 'email'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    action: 'cancel',
                                    iconCls: 'icon-reset',
                                    text: 'Cancel'
                                },
                                {
                                    xtype: 'button',
                                    action: 'save',
                                    formBind: true,
                                    iconCls: 'icon-save',
                                    text: 'Save'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});